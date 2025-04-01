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
        primary: '#40BFFF',

        black: '#000',
        neutral: '#223263',

        blue: '#BCDDFE',

        white: '#fff',
        'white-100': '#F6F7F8',

        red: '#FB7181',

        wheat: '#F6F6F6',
        'wheat-100': '#e3e3e3',

        'gray-25': '#C1C8CE',
        'gray-50': '#FAFAFB',
        'gray-100': '#9098B1'
      },
      spacing: {
        26: '104px'
      },
      columns: {
        '10xl': '93.75rem'
      },
      fontSize: {
        sm: ['16px', '1'],
        lg: ['20px', '1'],
        xl: ['24px', '1']
      },
      backgroundImage: {
        'hero-img': "url('/public/main_img.png')"
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: theme('columns.10xl'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '30px',
          paddingRight: '30px'
        }
      })
    }),
    require('@tailwindcss/line-clamp')
  ]
}
