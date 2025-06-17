/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',        // your root HTML
    './src/**/*.{js,jsx}', // all React files
  ],
  theme: { extend: {
    screens: {
        'xs': '390px', // custom breakpoint for small phones
      },
  } },
  plugins: [],
};
