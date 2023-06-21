/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black-100': '#2B2C35',
        theme: 'rgba(236 72 153)',
        'primary-blue': {
          DEFAULT: '#2B59FF',
          100: '#F5F8FF'
        }
      }
    }
  },
  fontFamily: {
    playfair: ['Playfair Display']
  },
  plugins: []
};
