/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "checked:bg-black",
    "checked:bg-blue-500",
    "checked:bg-green-500",
    "checked:bg-orange-500",
    "checked:bg-pink-500",
    "checked:bg-gray-500",
    "checked:bg-yellow-500",
    "checked:bg-amber-700"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
