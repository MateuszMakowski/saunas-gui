/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    animation: {
      "loop-scroll": "loop-scroll 50s linear infinite",
    },
    keyframes: {
      "loop-scroll": {
        from: {transform: "translateY(0)"},
        to: {transform: "translateY(-100%)"},
      }
    },
  },
  plugins: [],
}

