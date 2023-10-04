/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
    
  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    150: "150px",
    190: "190px",
    880: "880px"              // similarly all pixels
  },
  height: {
    150: "150px",
    190: "190px",
    880: "880px"    
  },
  minWidth: {
    210: "210px",
    350: "350px",
    620: "620px",
    650: "650px"
  },
  screens: {
    small: "640px",
    medium: "768px",
    Large: "1024px",
    X_Large: "1280px",
    "2_XL":  "1536px"
  },
 /*  colors: {
    headingColor: "#2e2e2e",
    textColor: "#515151",
    cartNumBg: "#e80013",
    primary: "#f5f3f3",
  }, */
  plugins : [require('tailwind-scrollbar'),
]
};

