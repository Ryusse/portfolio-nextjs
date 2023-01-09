import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import { colors } from '@styles/abstracts/colors';

const base = defineStyle({
  borderBottomWidth: '1px',
  borderStyle: 'solid',
  borderColor: colors.blue[200],
  color: colors.blue[200],
  backgroundColor: colors.blue[200],
});

export const dividerTheme = defineStyleConfig({
  variants: { base },
});
