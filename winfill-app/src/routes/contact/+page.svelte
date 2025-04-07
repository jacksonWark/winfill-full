<script lang="ts">
    import type { EventHandler } from "svelte/elements";
    import Paragraph from "../../components/paragraph.svelte";
    import ProjectTile from "../../components/project-tile.svelte";
    
    //https://us-central1-winfill-373723.cloudfunctions.net/contact-form
    //https://contact-form-puowesrjpa-uc.a.run.app
    //https://contact-form-29986938493.us-central1.run.app

    const submitURL : string = 'https://contact-form-29986938493.us-central1.run.app';

    function startTimer() {
		setTimeout(() => {
            let statusElement = document.getElementById('status');
            if (statusElement) {statusElement.innerText = '';}
		},2000)	
	}

    const handleSubmit: EventHandler<SubmitEvent, HTMLFormElement> = (e) => {
		// getting the action url
		const ACTION_URL = e.currentTarget.action;

        let formElements = (e.currentTarget as HTMLFormElement).elements;
        let payload = {
            email: (formElements[0] as HTMLInputElement).value, 
            name: (formElements[1] as HTMLInputElement).value, 
            profile: (formElements[2] as HTMLInputElement).checked,
            message: (formElements[3] as HTMLInputElement).value
        };

        let data = new FormData();
        data.append( "json", JSON.stringify( payload ) );
        
        let myHeaders = new Headers({
            "Content-Type": "application/json"
        });

        fetch(ACTION_URL, {
            method: 'POST',
            body: data.get('json'),
            headers : myHeaders,
            mode: "cors",
            credentials: "omit"
        })
        .then(function(res) { 
            let statusElement = document.getElementById('status');
            const responseStatus = res.status;
            if (statusElement) {
                if (responseStatus == 200) { statusElement.innerText = 'Sent!' }
                else if ((responseStatus != 204) && (responseStatus != 202)) { statusElement.innerText = 'Failed.' }; 
                startTimer();
            }
        });	
	}

</script>



<div class="col-span-full block lg:flex lg:flex-row xl:block xl:col-span-2">
    <div>
      <div class="w-full text-xl md:text-2xl xl:text-3xl ">
        <p class='text-orange inline mr-2'>Let's Build</p> 
    </div>

    <Paragraph extraStyles="mb-6  mr-0 lg:mr-20 xl:mr-0 " text={`
        We commence each project with a collaborative introduction.
        Our team will personally visit your site (or assist in finding one) and attentively listen to your ideas, all while sharing our insights and creativity.
        We dedicate time to ideate with you, regardless of the project's scale. 
        Whether it's multi-family developments, custom homes, residential additions, or garages, we have sucessfully constructed them all.
    `}/>  
    </div>
    

    <img class="w-full " src="/images/projects/Husky.webp" alt="">
    

</div>




<div class="flex flex-col col-span-full xl:col-span-4 xl:col-start-4">
    <div class="mb-24">
        <p class=" text-xl md:text-2xl xl:text-3xl">
            For project inquiries contact 
        </p>
        <p class=" text-xl md:text-2xl xl:text-3xl">
            <b>780 803 2405</b>
             or 
             <a href="mailto:info@winfill.ca" class="underline decoration-orange hover:text-orange">info@winfill.ca</a>
        </p>
    </div>
    <div class="flex justify-self-end mb-8 md:flex-row text-xl md:text-2xl xl:text-3xl">
        <p class='mr-1 '>Follow The Builds:</p>
        <a href="https://www.instagram.com/winfill_developments/" target="_blank" rel="noopener noreferrer" class="underline decoration-orange hover:text-orange text-right">Instagram</a> 
    </div>

    <div class="w-full h-full">
        <form class="bg-white grid md:grid-cols-2 gap-12 " id="contactForm" action="{submitURL}" on:submit|preventDefault={handleSubmit}>
          <div class="flex flex-row justify-start items-center col-span-2 md:col-span-1">
            <label class="inline text-sm font-bold mr-2 md:text-lg xl:text-xl" for="email">Email</label>
            <input class="inline shadow appearance-none w-full py-1 px-2 leading-tight focus:outline-none focus:border" id="email" type="email" name="email">
          </div>
          <div class="flex flex-row justify-start items-center col-span-2 md:col-span-1">
            <label class="inline text-sm font-bold mr-2 align-middle md:text-lg xl:text-xl" for="name">Name</label>
            <input class="inline shadow appearance-none w-full py-1 px-2 leading-tight focus:outline-none focus:border" id="name" type="text" name="name">
          </div>
          <div class="col-span-2">
            <label class="inline text-sm font-bold mr-2 align-middle md:text-lg xl:text-xl" for="profile">Send company profile?</label>
            <input type="checkbox" id="profile" name="profile" value="true">
          </div>
          <div class="col-span-2">
            <label class="block text-sm font-bold mb-2 md:text-lg xl:text-xl" for="message">Message</label>
            <textarea class="shadow appearance-none w-full h-40 py-1 px-2 leading-tight focus:outline-none focus:border lg:h-50" id="message" name="message"></textarea>
          </div>
          <div class="flex justify-end col-span-2 items-center">
            <p class='mr-6' id='status'></p>
            <input class="bg-orange hover:text-black text-white font-bold py-1 px-2 focus:outline-none focus:shadow-outline text-sm md:text-lg xl:text-xl" type="submit" value="Submit"/>
          </div>
        </form>
    </div>

</div>

<div class="col-span-full  flex flex-row justify-center mt-16 lg:mt-0 lg:col-span-1 lg:col-start-9">
    <div class="w-1/2 md:w-1/4 lg:w-full  relative">
        <img src="/images/Alberta.webp" alt="winfill">
        <div class="absolute text-nowrap -right-8 top-0 w-6 rotate-90 text-2xl md:text-md lg:text-lg font-bold">Proudly Serving Alberta</div>
    </div>
</div>