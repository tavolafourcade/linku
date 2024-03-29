/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  plugins: [],
  theme  : {
    extend: {
      colors: {
        accent   : '#D1070E',
        backdrop : '#BA5831',
        footer   : '#0C2749',
        light    : '#F5F4EE',
        primary  : '#B0070D',
        secondary: '#701D20'
      },
      fontFamily: {
        onest: [ 'var(--font-onest)' ]
      }
    }
  }
}
