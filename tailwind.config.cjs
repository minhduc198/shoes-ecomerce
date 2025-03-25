const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
        secondary: '#F5F5F5',
        secondary2: '#DB4444',
        red: '#FB1314',
        gray: {
          light: '#FAFAFA',
          dark: '#7F7F7F'
        },
        yellow: {
          dark: '#FFAD33',
          light: '#EEFF61'
        },
        green: {
          light: '#00FF66',
          dark: '#184A48'
        }
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: theme('columns.7xl'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4')
        }
      })
    }),
    require('@tailwindcss/line-clamp')
  ]
}
