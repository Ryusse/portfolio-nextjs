import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import { colors } from '@styles/Base/colors';

const outline = defineStyle({
  border: '1px solid',
  borderRadius: 20,
  paddingX: '10px',
  paddingY: '5px',
  textTransform: 'none',
  fontWeight: 400,
  boxShadow: 'none',
});
const rounded = defineStyle({
  borderRadius: '100%',
  padding: '1rem',
  textTransform: 'none',
  backgroundColor: colors.blue[200],
  color: colors.gray[300],
  boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
});

export const badgeTheme = defineStyleConfig({
  variants: { outline, rounded },
});
