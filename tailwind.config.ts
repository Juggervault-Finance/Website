import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        instrument: ['var(--font-instrument)', 'sans'],
      },
      boxShadow: {
        csbtn: "2px 2px 24.3px 0px #B3B3B340",
      },
      colors: {
        bg: "var(--bg-main)",
        fg: "var(--fg-main)",
        basic: {
          50:"var(--base-1)",
          100: "var(--base-2)",
        },
        primary: {
          50: "var(--bg-pry)",
        }
      },
    },
  },
  plugins: [],
};
export default config;
