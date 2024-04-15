/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './www/index.html',
    './www/*.html',
    './www/js/*.{js}'
  ],
  theme: {
    colors: {
      orange: '#F05939',
      black: '#000',
      white: '#fff',
    },
    //extend: {
      fontFamily : {
        sans: [
          'Arimo',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"', 
          '"Noto Color Emoji"',
        ],
        serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
        //'arimo' : ['Arimo', 'sans-serif']
      }//,
   // }
  },
  plugins: [],
}

