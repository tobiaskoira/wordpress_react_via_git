/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.php",
     "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1D4ED8",   // bg-brand
          strong: "#1E40AF",    // hover:bg-brand-strong
          medium: "#BFDBFE",    // focus:ring-brand-medium
        },
        heading: "#0F172A",     // text-heading
        body: "#475569",        // text-body
      },
      borderRadius: {
        base: "0.5rem",         // rounded-base
      },
      boxShadow: {
        xs: "0 1px 2px rgba(0,0,0,0.05)", // shadow-xs
      },
      borderColor: {
        default: "#E5E7EB",     // border-default
      },
      backgroundColor: {
        "neutral-primary-soft": "#FFFFFF", // bg-neutral-primary-soft
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],
};



