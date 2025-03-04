import type { Config } from "tailwindcss";

const config: Config = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          "background-primary": "#050505",
          "background-secondary": "#0F0F0F",
          "background-tertiary": "#19191A",
          "content-body": "#CDCBCC",
          "content-placeholder": "#2B2B2B",
          "content-headline": "#2B2B2B",
          "border-primary": "#19191A",
          "border-secondary": "#322324",
          "border-tertiary": "#797979",
          "accent-purple": "#4B20BE",
          "accent-green": "#87BDB0",
          "accent-pink": "#B5446B",
        },
      },
    },
    plugins: [],
  };
  export default config;
  