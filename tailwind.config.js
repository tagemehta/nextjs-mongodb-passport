const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter'
      },
      ringWidth: {
        '3': '3px'
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [  
      plugin(function({ addComponents, theme }) {
        const buttons = {
          '.btn': {
            padding: `${theme('spacing.1')} ${theme('spacing.3')}`,
            borderRadius: theme('borderRadius.md'),
            fontWeight: theme('fontWeight.500'),
            cursor: 'pointer',
            fontSize: theme('fontSize.lg')
          },
          '.btn-indigo': {
            backgroundColor: theme('colors.indigo.500'),
            color: theme('colors.white'),
            '&:hover': {
              backgroundColor: theme('colors.indigo.600')
            },
          },
          '.btn-outline': {
            border: `${theme('borderWidth.DEFAULT')} solid ${theme('colors.white')}`,
            color: theme('colors.white'),
            '&:hover': {
              textDecoration: 'underline'
            }
          },
          '.link': {
            '&:hover': {
              textDecoration: 'underline'
            }
          },
          '.box-select': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: theme('spacing.32'),
            height: theme('spacing.32'),
            padding: `${theme('spacing.4')} ${theme('spacing.1')}`,
            marginTop: theme('spacing.4'),
            backgroundColor: theme('colors.gray.200'),
            cursor: 'pointer'
          }
        }
  
        addComponents(buttons)
      })]
}
