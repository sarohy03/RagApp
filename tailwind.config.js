/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)', // Returns to original position
          },
        },
        moveFromRight: {
          '0%': { transform: 'translateX(800px)' },
          '100%': { transform: 'translateX(0)' },
        },
        moveToRight: { // Adding the new keyframe for moveToRight
          '100%': { transform: 'translateX(1000px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards', // Adjust duration and easing as needed
        fadeInRight: 'fadeInRight 0.5s ease-in-out forwards',
        moveFromRight: 'moveFromRight 0.8s ease-out forwards',
        moveToRight: 'moveToRight 1s forwards', // Adding the new animation
      },
    },
  },
  plugins: [],
};
