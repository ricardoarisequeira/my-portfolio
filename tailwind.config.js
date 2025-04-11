/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          'background': '#000',
          'text': '#ff0000',
          'primary': '#ff0000',
          'secondary': '#213547',
          'accent': '#646cff',
        },
      },
    },
    plugins: [],
  };
  