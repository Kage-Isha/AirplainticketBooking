/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        bannerImg:"url('/homebg.png')",
        banImg:"url('/homemd.png')",
      },
      colors: {
        background: "var(--background)",
        prime: {
          50:"var(--prime-50)",
          100:"var(--prime-100)",
        },
        letter: "var(--letter)",
      },
    },
  },
  plugins: [],
};
