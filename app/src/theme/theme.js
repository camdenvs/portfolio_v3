import { extendTheme, theme as base, withDefaultColorScheme, withDefaultVariant } from "@chakra-ui/react";


const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#c4b088'
      },
      a: {
        transition: '0.3s ease-in',
        _hover: {
          color: '#8b2733',
        }
      }
    }
  },
  colors: {
    primary: {
      50: '#fbf4e4',
      100: '#e8ddc8',
      200: '#d6c6a9',
      300: '#c4b088',
      400: '#b39967',
      500: '#99804d',
      600: '#77633b',
      700: '#554729',
      800: '#342b16',
      900: '#150d00',
    },
    secondary: {
      50: '#f2f2f2',
      100: '#d9d9d9',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#262626',
      900: '#0d0d0d',
    },
    tertiary: {
      50: '#ffe8ec',
      100: '#f2c2c7',
      200: '#e49ba4',
      300: '#d8747f',
      400: '#cb4d5b',
      500: '#b23442',
      600: '#8b2733',
      700: '#641b24',
      800: '#3e0f15',
      900: '#1c0204',
    },
    quaternary: {
      50: '#e8e8ff',
      100: '#bebcf8',
      200: '#928ff0',
      300: '#6862e9',
      400: '#3d36e2',
      500: '#241cc8',
      600: '#1b159c',
      700: '#130f70',
      800: '#090945',
      900: '#04021b',
    },
  },
  fonts: {
    // All headings will use josefin fonts but fallback to default theme fonts 
    heading: `Exo 2, ${base.fonts.body}`,
    // All body text will use this font but fallback to default theme fonts 
    body: `Open Sans, ${base.fonts.body}`
  },
},
  withDefaultColorScheme({
    colorScheme: 'quaternary',
    components: ['Button'],
  }),
  withDefaultVariant({
    variant: 'noUnderline',
    components: ['Link']
  })
)

export default customTheme;