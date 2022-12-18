import { extendTheme } from '@chakra-ui/react';
import { colors } from '@styles/base/colors';
import { badgeTheme } from '@styles/components/badgeTheme';

//import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props: any) => ({
    body: {
      //bg: mode('#f0e7db', '#13181F')(props),
      bg: colors.background.paper,
      color: colors.gray[500],
    },
    p: {
      lineHeight: '28px',
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
  heading01: {
    fontSize: ['48px'],
  },
  heading02: {
    fontSize: ['40px'],
  },
  heading03: {
    fontSize: ['36px'],
  },
  heading04: {
    fontSize: ['32px'],
  },
  heading05: {
    fontSize: ['28px'],
  },
  heading06: {
    fontSize: ['24px'],
  },
  subheading01: {
    fontSize: ['22px'],
  },
  subheading02: {
    fontSize: ['20px'],
  },
  subheading03: {
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
