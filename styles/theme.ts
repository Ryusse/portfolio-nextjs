import { extendTheme } from '@chakra-ui/react';
import {
  colors,
  textStyles,
  breakpoints,
  components,
  fonts,
  base,
} from '@styles/abstracts';

//import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  base,
  fonts,
  colors,
  textStyles,
  breakpoints,
  components,
});
type theme = typeof theme;
export default theme;
