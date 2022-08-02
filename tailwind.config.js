const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'gray-700': '#767676',
        'black-100': '#1A1311',
        'brown-400': '#4E3B30'
      }
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      roman: 'upper-roman',
      cjk: 'trad-chinese-informal',
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
