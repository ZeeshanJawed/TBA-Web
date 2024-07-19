import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./blogs/**/*.{js,ts,jsx,tsx,mdx}",
    "./posts/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-blog": "linear-gradient(90deg, #d8b4f0, #001a2d)",
        'gradient-blog1': 'linear-gradient(to left, #350757, #410a6a, #4d0e7f, #591293, #6517a9, #6717ad, #6916b1, #6b16b5, #6310a8, #5b0a9b, #53048e, #4b0082);',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        'custom-gradient': 'linear-gradient(135deg, #3b0764 0%, #1a0933 100%)',
        'buttongrp-gradient': 'linear-gradient(0deg, #DBC3FA 0%, #EEEAF5 100%)',
        'button-gradient': 'linear-gradient(135deg, #8a2be2, #4b0082)', // Replace with the colors from the image
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customGray: '#56525F',
        card1: '#4e4f52',
        card2: '#918E98',
        card3: '#514c5a',
        card4: '#918E98',
        toolsText: "#EEEAF5",
        certificateBtn: "#323333",
        testimoCard: "#11181c",
        testimocardText: '#918E98',
        logoColor: '#0E0F0F'


      },
    },
  },
  plugins: [],
};
export default config;
