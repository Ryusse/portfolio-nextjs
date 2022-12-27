import { accordionAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { colors } from '@styles/base/colors';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    border: 'none',
  },

  button: {
    cursor: 'default',
    paddingY: '0.9375rem',
    paddingX: '1.5rem',
    backgroundColor: colors.primary.dark,
    borderColor: '',
    borderRadius: '6px',
    fontWeight: 600,
    border: 'none',
    color: 'white',
    _hover: { bg: colors.primary.main },
    _expanded: { bg: colors.primary.main },
  },

  panel: {
    borderRadius: '6px',
    marginTop: '1.25rem',
    padding: '1.5rem',
    backgroundColor: colors.blue[200],
  },
});

export const accordionTheme = defineMultiStyleConfig({
  baseStyle,
});
