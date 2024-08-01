const functions = require('@google-cloud/functions-framework');
const { google } = require('googleapis');

/**
 * HTTP function that supports CORS requests with credentials.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
functions.http('httpHandle', (req, res) => {
  try {
    res.app.set('view engine', 'html');
    // Set CORS headers for preflight requests
    res.set('Access-Control-Allow-Origin', '*');

    if (req.method === 'OPTIONS') {
      // Send response to OPTIONS requests
      res.set('Access-Control-Allow-Methods', 'POST');
      res.set('Access-Control-Allow-Headers', 'Content-Type');
      res.set('Access-Control-Max-Age', '3600');
      res.status(204).send('CORS Success');
    } 
    else { //Handle POST request 
      if (req.get('content-type') == 'application/json') {
        console.log(req.body);
        let data = req.body;
        let row = [data.name,data.email,data.message,todayDate(),false]; //format request data for sending to Sheets API later
        var jwt = getJwt();
        var apikey = getApiKey();
        var sheetID = require("./key.json").sheetID;
        

        rowExists(jwt,apikey,sheetID,row).then((value) => { //Check to see if the current submission is a duplicate to avoid spam
          console.log('rowExists - result = ' + value); 
          if (value === 'false') {
            console.log('adding to drive');
            appendSheetRow(jwt,apikey,sheetID,'A1',row) //Add to google sheet
            .then((result) => {
              console.log('Updated sheet: ' + result.data.updates.updatedRange);
              res.status(200).send('Success').end();
            }).catch((err) => {
              res.status(400).send('Failed to append to sheets').end();
              console.log('appendSheetRow - error = ' + err);
            });
          }
          else {
            res.status(202).send('Duplicate').end();
            console.log('Compweted');
          }
        })       
      }
      else {
        res.status(400).send('Invalid content-type').end();
        console.log('Compweted');
      }
    };
  }
  catch(err) {
    console.log('Catch: ', err);
    res.status(400).send('Error').end();
    console.log('Compweted');
  }
});



function appendSheetRow(jwt, apiKey, spreadsheetId, range, row) { //promise
  const sheets = google.sheets({version: 'v4'});
  return sheets.spreadsheets.values.append({ //add row to bottom of google sheet using Sheets API 
    spreadsheetId: spreadsheetId,
    range: range,
    auth: jwt,
    key: apiKey,
    valueInputOption: 'RAW',
    resource: {values: [row]}
  })
}

function rowExists(jwt, apiKey, spreadsheetId, row) { //boolean
  return readSheets(jwt,apiKey,spreadsheetId) //read the whole sheet from Sheets API
  .then((result) => {
    const sheet = result.data.values; //extract data from API response
    console.log('rowExists - row = ' + row);
    if (!sheet || sheet.length === 0) {
      return 'false';
    }
    else { //Compare row that has been submitted to rows in sheet
      for (let I = 0; I < sheet.length; I++) { 
        if (sheet[I] != undefined && equalsCheck(row,sheet[I])) {
          console.log('rowExists - matching row = ' + sheet[I]); 
          return 'true'}
      };
      return 'false';
    }
  })
  .catch((err) => {
    console.log('rowExists - error = ' + err);
    return 'false';
  });
}

function readSheets(jwt,apiKey,spreadsheetId) { //promise
  const sheets = google.sheets({version: 'v4'});  
  return sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: 'Sheet1',
      majorDimension: 'ROWS',
      auth: jwt,
      key: apiKey
  });
}

function equalsCheck(a, b) { //boolean
  if (a.length != b.length) {
      return false;
  } else {
      let result = false;
      for (let i = 0; i < a.length - 1; i++) {
          if (a[i] !== b[i]) { return false } 
          else { result = true }
      }
      return result;
  }
}

function todayDate(){ //string
    var today = new Date();
    return today.toDateString();
}

function getJwt() { 
  var key = require("./key.json");
  var creds = key.credentials;
  return new google.auth.JWT(
    creds.client_email, null, creds.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
  );
}

function getApiKey() {
  var apiKeyFile = require("./key.json");
  return apiKeyFile.apikey;
}