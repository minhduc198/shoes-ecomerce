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
        white: '#fff',
        secondary: '#F5F5F5',
        secondary2: '#DB4444',
        red: {
          '100': '#FB7181',
          '200': '#FF4858'
        },
        gray: {
          '50': '#f6f6f6',
          '100': '#9098B1',
          '200': '#C1C8CE',
          '300': '#262626',
          '400': '#F6F7F8',
        },
        yellow: {
          '100': '#FFC600'
        },
        green: {
          '100': '#00FF66',
        },
        blue: {
          '100': '#BCDDFE',
          '200': '#223263',
          '300': '#33A0FF'
        },
        
      },

    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: '1500px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }
      })
    }),
    require('@tailwindcss/line-clamp')
  ]
}
