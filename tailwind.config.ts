import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main": "url('/public/bg.jpg')"
      },
    },
    colors: {
      "white": "#FFFFFF",
      "offwhite": "#F5E8E2",
      "blush": "#CD8062",
      "telha": "#B66027",
      "terracota": "#9E4825",
      "marinho": "#005D86"
    }
  },
  plugins: [],
};
export default config;
