// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily : {
//         Montserrat : "'Montserrat', sans-serif"
//       }
//     },
//   },
//   plugins: [require("daisyui")],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}

