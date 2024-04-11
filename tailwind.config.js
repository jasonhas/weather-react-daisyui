/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      "cmyk",
      "retro",
      "cyberpunk",
      "wireframe",
      "nord",
      "fantasy"
    ]
  }
}

