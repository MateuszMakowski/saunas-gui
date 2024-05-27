/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    animation: {
      "loop-scroll": "loop-scroll 5s linear infinite",
    },
    keyframes: {
      "loop-scroll": {
        from: {transform: "translateY(0)"},
        to: {transform: "translateY(-100%)"},
      }
    },
    container: {
      center: true,
      padding: '1rem'
    },
  },
  plugins: [],
}

