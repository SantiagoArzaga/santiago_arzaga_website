const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
        "neon-moss": "#c9cca1",
        "alloy-ochre": "#caa05a",
        "copper-terra": "#ae6a47",
        "cranberry-bus": "#8b4049",
        "grape-vector": "#543344",
        "steel-stack": "#515262",
        "aero-cache": "#63787d",
        "mint-drone": "#8ea091",
    },
    fontFamily: {
      sans: ['Graphik', '"M PLUS 1 Code"', 'sans-serif'],
      serif: ['Merriweather', '"M PLUS 1 Code"', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    }
  }
}