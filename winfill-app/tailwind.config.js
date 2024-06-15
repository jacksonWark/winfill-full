/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: [
    {
      pattern: /col-span-.+/,
      variants: ['md','lg']
    },
    {
      pattern: /col-start-.+/,
      variants: ['md','lg']
    },
    {
      pattern: /row-span-.+/,
      variants: ['md','lg']
    },
  ],
  theme: {
    colors: {
      'orange': '#F05939',
      'black': '#000',
      'white': '#fff',
    },
    
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
        
      },
   extend: {
    screens: {
      xs : {'max': '314px'}
    }

   //'arimo' : ['Arimo', 'sans-serif'],
   }
  },
  plugins: [],
}