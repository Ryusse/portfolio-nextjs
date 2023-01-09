import { colors } from '@styles/abstracts/colors';

export const base = {
  global: (props: any) => ({
    body: {
      //bg: mode('#f0e7db', '#13181F')(props),
      bg: colors.background.paper,
      color: colors.gray[500],
    },
    p: {
      lineHeight: '25px',

      [`@media screen and (min-width: ${props.theme.breakpoints.lg})`]: {
        lineHeight: '28px',
      },
    },
  }),
};
