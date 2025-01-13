/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          fff6f2: '#FFF6F2',
          ffeee4: '#FFEEE4',
          ffa375: '#FFA375',
          ff7e3d: '#FF7E3D',
          ff4200: '#FF4200',
        },
        grey: {
          f8f8f8: '#F8F8F8',
          eeeeee: '#EEEEEE',
          ededed: '#EDEDED',
          d4d4d4: '#D4D4D4',
          _8f8f8f: '#8F8F8F',
          _242424: '#242424',
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
