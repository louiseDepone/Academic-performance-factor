/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      transitionDelay: {
        slow: '500s', // or any other value you prefer
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme : {
          "base-100": "#ffffff",
          "primary": "#1051E4",
        }
      }
    ]
  },
}