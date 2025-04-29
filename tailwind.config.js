/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
