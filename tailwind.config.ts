import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        // 'bg-image':"url('/bg.png')"
      },
      width:{
        xl:"1920px",
        lx:"1320px",
        "box":"899px"
      },
      spacing:{
        np:"830px"
      },
      height:{
        xl:"950px",
        xxl:"1400px",
        l:"469px",
        vl:"1750px"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
