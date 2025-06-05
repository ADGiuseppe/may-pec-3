/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#386641',
        'primary-light': '#829e72a5',
        'primary-dark': '#2a4733',
        'primary-accent': '#93aa83',
        secondary: '#f2e8cf',
        tertiary: '#bc4749',
        accent: '#a7c957',
        'heading-color': 'var(--bs-heading-color)',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
        serif: [
          'Georgia',
          '"Times New Roman"',
          'serif',
        ],
      },
    },
  },
  plugins: [],
}

