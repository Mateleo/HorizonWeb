const plugin = require('tailwindcss/plugin')
const autoprefixer = require('autoprefixer')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screen: {
        'sm-max': { max: '639px' },
        'md-max': { max: '767px' },
        'lg-max': { max: '1023px' },
        'xl-max': { max: '1279px' },
        '2xl-max': { max: '1535px' }
      },
      colors: {
        orange: colors.orange,
        sky: colors.sky
      },
      borderColor: {
        0: {
          light: '#fff',
          dark: '#000'
        },
        1: {
          light: '#fafafa',
          dark: '#0A0E18'
        },
        2: {
          light: '#f3f3f5',
          dark: '#1a1e28'
        },
        3: {
          light: '#6C717D',
          dark: '#7F889C'
        },
        4: {
          light: '#d4d4d4',
          dark: '#323030'
        },
        5: {
          light: '#c6c6c6',
          dark: '#444'
        },
        6: {
          light: '#bebebe',
          dark: '#5e5e5e'
        }
      },
      backgroundColor: {
        0: {
          light: '#000',
          dark: '#fff'
        },
        1: {
          light: '#0A0E18',
          dark: '#fafafa'
        },
        2: {
          light: '#1a1e28',
          dark: '#f3f3f5'
        },
        3: {
          light: '#6C717D',
          dark: '#7F889C'
        },
        4: {
          light: '#323030',
          dark: '#d4d4d4'
        },
        5: {
          light: '#444',
          dark: '#c6c6c6'
        },
        6: {
          light: '#5e5e5e',
          dark: '#bebebe'
        }
      },
      textColor: {
        'placeholder-0': {
          light: '#7F889C',
          dark: '#6C717D'
        },
        0: {
          light: '#fff',
          dark: '#000'
        },
        1: {
          light: '#fafafa',
          dark: '#0A0E18'
        },
        2: {
          light: '#f3f3f5',
          dark: '#1a1e28'
        },
        3: {
          light: '#6C717D',
          dark: '#7F889C'
        },
        4: {
          light: '#d4d4d4',
          dark: '#323030'
        },
        5: {
          light: '#c6c6c6',
          dark: '#444'
        },
        6: {
          light: '#bebebe',
          dark: '#5e5e5e'
        }
      },
      placeholderColor: {
        0: {
          light: '#7F889C',
          dark: '#6C717D'
        }
      },
      minHeight: {
        20: '5rem'
      }
    }
  },
  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'empty',
    'read-only',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'disabled'
  ],
  variants: {
    extend: {
      boxShadow: ['dark'],
      brightness: ['dark'],
      backgroundColor: ['active'],
      borderRadius: ['focus']
    }
  //   accessibility: ['responsive', 'focus-within', 'focus'],
  //   alignContent: ['responsive'],
  //   alignItems: ['responsive'],
  //   alignSelf: ['responsive'],
  //   animation: ['responsive'],
  //   appearance: ['responsive'],
  //   backdropBlur: ['responsive'],
  //   backdropBrightness: ['responsive'],
  //   backdropContrast: ['responsive'],
  //   backdropFilter: ['responsive'],
  //   backdropGrayscale: ['responsive'],
  //   backdropHueRotate: ['responsive'],
  //   backdropInvert: ['responsive'],
  //   backdropOpacity: ['responsive'],
  //   backdropSaturate: ['responsive'],
  //   backdropSepia: ['responsive'],
  //   backgroundAttachment: ['responsive'],
  //   backgroundBlendMode: ['responsive'],
  //   backgroundClip: ['responsive'],
  //   backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'active'],
  //   backgroundImage: ['responsive'],
  //   backgroundOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
  //   backgroundPosition: ['responsive'],
  //   backgroundRepeat: ['responsive'],
  //   backgroundSize: ['responsive'],
  //   backgroundOrigin: ['responsive'],
  //   blur: ['responsive'],
  //   borderCollapse: ['responsive'],
  //   borderColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
  //   borderOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
  //   borderRadius: ['responsive', 'focus'],
  //   borderStyle: ['responsive'],
  //   borderWidth: ['responsive', 'focus'],
  //   boxDecorationBreak: ['responsive'],
  //   boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'dark'],
  //   boxSizing: ['responsive'],
  //   brightness: ['responsive', 'dark'],
  //   clear: ['responsive'],
  //   container: ['responsive'],
  //   contrast: ['responsive'],
  //   cursor: ['responsive'],
  //   display: ['responsive'],
  //   divideColor: ['responsive', 'dark'],
  //   divideOpacity: ['responsive', 'dark'],
  //   divideStyle: ['responsive'],
  //   divideWidth: ['responsive'],
  //   dropShadow: ['responsive'],
  //   fill: ['responsive'],
  //   filter: ['responsive'],
  //   flex: ['responsive'],
  //   flexDirection: ['responsive'],
  //   flexGrow: ['responsive'],
  //   flexShrink: ['responsive'],
  //   flexWrap: ['responsive'],
  //   float: ['responsive'],
  //   fontFamily: ['responsive'],
  //   fontSize: ['responsive'],
  //   fontSmoothing: ['responsive'],
  //   fontStyle: ['responsive'],
  //   fontVariantNumeric: ['responsive'],
  //   fontWeight: ['responsive'],
  //   gap: ['responsive'],
  //   gradientColorStops: ['responsive', 'dark', 'hover', 'focus'],
  //   grayscale: ['responsive'],
  //   gridAutoColumns: ['responsive'],
  //   gridAutoFlow: ['responsive'],
  //   gridAutoRows: ['responsive'],
  //   gridColumn: ['responsive'],
  //   gridColumnEnd: ['responsive'],
  //   gridColumnStart: ['responsive'],
  //   gridRow: ['responsive'],
  //   gridRowEnd: ['responsive'],
  //   gridRowStart: ['responsive'],
  //   gridTemplateColumns: ['responsive'],
  //   gridTemplateRows: ['responsive'],
  //   height: ['responsive'],
  //   hueRotate: ['responsive'],
  //   inset: ['responsive'],
  //   invert: ['responsive'],
  //   isolation: ['responsive'],
  //   justifyContent: ['responsive'],
  //   justifyItems: ['responsive'],
  //   justifySelf: ['responsive'],
  //   letterSpacing: ['responsive'],
  //   lineHeight: ['responsive'],
  //   listStylePosition: ['responsive'],
  //   listStyleType: ['responsive'],
  //   margin: ['responsive'],
  //   maxHeight: ['responsive'],
  //   maxWidth: ['responsive'],
  //   minHeight: ['responsive'],
  //   minWidth: ['responsive'],
  //   mixBlendMode: ['responsive'],
  //   objectFit: ['responsive'],
  //   objectPosition: ['responsive'],
  //   opacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
  //   order: ['responsive'],
  //   outline: ['responsive', 'focus-within', 'focus'],
  //   overflow: ['responsive'],
  //   overscrollBehavior: ['responsive'],
  //   padding: ['responsive'],
  //   placeContent: ['responsive'],
  //   placeItems: ['responsive'],
  //   placeSelf: ['responsive'],
  //   placeholderColor: ['responsive', 'dark', 'focus'],
  //   placeholderOpacity: ['responsive', 'dark', 'focus'],
  //   pointerEvents: ['responsive'],
  //   position: ['responsive'],
  //   resize: ['responsive'],
  //   ringColor: ['responsive', 'dark', 'focus-within', 'focus'],
  //   ringOffsetColor: ['responsive', 'dark', 'focus-within', 'focus'],
  //   ringOffsetWidth: ['responsive', 'focus-within', 'focus'],
  //   ringOpacity: ['responsive', 'dark', 'focus-within', 'focus'],
  //   ringWidth: ['responsive', 'focus-within', 'focus'],
  //   rotate: ['responsive', 'hover', 'focus'],
  //   saturate: ['responsive'],
  //   scale: ['responsive', 'hover', 'focus'],
  //   sepia: ['responsive'],
  //   skew: ['responsive', 'hover', 'focus'],
  //   space: ['responsive'],
  //   stroke: ['responsive'],
  //   strokeWidth: ['responsive'],
  //   tableLayout: ['responsive'],
  //   textAlign: ['responsive'],
  //   textColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
  //   textDecoration: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
  //   textOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
  //   textOverflow: ['responsive'],
  //   textTransform: ['responsive'],
  //   transform: ['responsive'],
  //   transformOrigin: ['responsive'],
  //   transitionDelay: ['responsive'],
  //   transitionDuration: ['responsive'],
  //   transitionProperty: ['responsive'],
  //   transitionTimingFunction: ['responsive'],
  //   translate: ['responsive', 'hover', 'focus'],
  //   userSelect: ['responsive'],
  //   verticalAlign: ['responsive'],
  //   visibility: ['responsive'],
  //   whitespace: ['responsive'],
  //   width: ['responsive'],
  //   wordBreak: ['responsive'],
  //   zIndex: ['responsive', 'focus-within', 'focus']
  },
  plugins: [
    autoprefixer,
    plugin(function ({ addVariant }) {
      addVariant('important', ({ container }) => {
        container.walkRules(rule => {
          rule.selector = `.\\!${rule.selector.slice(1)}`
          rule.walkDecls(decl => {
            decl.important = true
          })
        })
      })
    }),
    require('@tailwindcss/line-clamp')
  ]
}
