import { defineStyle, extendTheme } from '@chakra-ui/react';
import { colors } from '@styles/Base/colors';
import { badgeTheme } from '@styles/components/badgeTheme';

//import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props: any) => ({
    body: {
      //bg: mode('#f0e7db', '#13181F')(props),
      bg: colors.background.paper,
      color: colors.gray[500],
    },
  }),
};

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
};

const textStyles = {
  h1: {
    fontSize: ['48px', '72px'],
    fontWeight: 'bold',
    lineHeight: '110%',
    letterSpacing: '-2%',
  },
  h2: {
    fontSize: ['1.375rem'],
    fontWeight: 'semibold',
    lineHeight: '28px',
  },
  subheading03: {
    fontSize: ['22px'],
  },
  subheading04: {
    fontSize: ['20px'],
  },
  subheading05: {
    fontSize: ['18px'],
  },
  textParagraph01: {
    fontSize: ['16px'],
  },
  textParagraph02: {
    fontSize: ['14px'],
  },
  textParagraph03: {
    fontSize: ['12px'],
  },
  textParagraph04: {
    fontSize: ['10px'],
  },
};

const fonts = {
  body: 'Satoshi, sans-serif',
};

const components = { Badge: badgeTheme };

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles,
  fonts,
  colors,
  textStyles,
  breakpoints,
  components,
});
type theme = typeof theme;
export default theme;
