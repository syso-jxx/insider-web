/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FFEEE4',
          200: '#FFA375',
          300: '#FF7E3D',
          400: '#F55A24',
          DEFAULT: '#FF4200',
        },
      },
    },
  },
  plugins: [],
};
