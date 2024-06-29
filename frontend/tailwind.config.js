/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          "primary": "#D1B096",
          "dark": "#141A1C",
          "white": "#FFFFFF",
          "black": "#000000",
        },
        gridTemplateColumns: {
          '13': 'repeat(13, minmax(0, 1fr))',
        },
      },
    },
    plugins: [require('@tailwindcss/forms')],
  };
