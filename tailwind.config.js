/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "afacad-regular": ["AfacadFlux-Regular"],
        "afacad-semibold": ["AfacadFlux-SemiBold"],
        "raleway-extralight": ["Raleway-ExtraLight"],
        "raleway-light": ["Raleway-Light"],
        "raleway-regular": ["Raleway-Regular"],
        "raleway-medium": ["Raleway-Medium"],
      },
    },
  },
  plugins: [],
}
