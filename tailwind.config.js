/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-violet": "var(--dark-violet)",
        "grayish-blue": "var(--grayish-blue)",
        "very-dark-violet": "var(--very-dark-violet)",
        "dark-grayish-violet": "var(--dark-grayish-violet)",
        "very-light-gray": "var(--very-light-gray)",
      },
      fontFamily: {
        "dm-serif-display": "var(--dm-serif-display)",
        karla: "var(--karla)",
      },
    },
  },
  plugins: [],
};
