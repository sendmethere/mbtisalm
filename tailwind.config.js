module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInOut: {
          '0%': { opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        fadeInOut: 'fadeInOut 1s ease-in-out',
        fadeIn: 'fadeIn 1s ease-in',
        fadeOut: 'fadeOut 1s ease-out',
      },
      colors: {
        primary : '#4f72f2',
        primaryLight : '#E3E9FB',
        violet : {
        100: '#f4f2ff',
        200: '#d6d8ef',
        300: '#C8C8E1',
        400: '#636FAA',
        500: "#3A4474",
        shadow : '#E6E5ED'
        },
        red : {
        50: '#FFCACB',
        100: '#FB474F',
        200: '#701C1F'
        },
        green: {
        50: '#BFFFE9',
        100: '#2BE7A7',
        200: '#33765F',
        },
        blue: {
        50: "#D3E8FF",
        100: "#47A6F3",
        200: "#5581A5",
        },
        purple: {
        50: "#EED1FF",
        100: "#CF6EFA",
        200: "#61406F",
        },
        orange: {
        50: "#FFE7C4",
        100: "#FFBF65",
        200: "#865E25",
        },
        yellow: {
        50: "#FFECB3",
        100: "#FED942",
        200: "#978436",
        },
      },
    }
  },
  plugins: [],
}
