import { extendTheme } from '@chakra-ui/react';
import {
  colors,
  textStyles,
  breakpoints,
  components,
  fonts,
} from '@styles/abstracts';

//import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      body: {
        //bg: mode('#f0e7db', '#13181F')(props),
        fontSize: '14px',
        bg: colors.background.paper,
        color: colors.gray[500],
        overflowX: 'hidden',

        [`@media screen and (min-width: ${props.theme.breakpoints.lg})`]: {
          fontSize: '1rem',
        },
      },
      p: {
        lineHeight: '25px',

        [`@media screen and (min-width: ${props.theme.breakpoints.lg})`]: {
          lineHeight: '28px',
        },
      },
    }),
  },
  fonts,
  colors,
  textStyles,
  breakpoints,
  components,
});
type theme = typeof theme;
export default theme;
