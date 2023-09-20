/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        main: 'Abril Fatface',
        text: 'Garamond',
      },
      colors: {
        blue: '#5173B4',
        ivory: '#EDE6D4',
        orange: '#E58D05',
        red: '#FE3D00',
        pink: '#EC9A94',
      },
    },
  },
  plugins: [],
};
