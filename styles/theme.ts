import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props: any) => ({
    body: {
      //bg: mode('#f0e7db', '#13181F')(props),
      bg: '#13181F',
    },
  }),
};

const fonts = {
  body: 'Satoshi, sans-serif',
};

const colors = {
  primary: {
    500: '#15D6D6',
    900: '#1a202c',
  },
  grey: {
    100: '#FFFFFF',
    300: '#ECEFF4',
    500: '#B5BBC7',
  },
  blue: {
    100: '#1B202C',
    200: '#222833',
    300: '#171C26',

    500: '#13181F',
  },
};


const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, fonts, colors });
export default theme;
