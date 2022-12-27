import { useTheme } from '@chakra-ui/react';
import { css } from '@emotion/react';

export const GlobalStyles = css`
  .object-cover {
    object-fit: cover;
  }
  .w-full {
    width: 100%;
  }
  .h-ful {
    height: 100%;
  }
  .rounded-10 {
    border-radius: 0.625rem;
  }
  .rounded-8 {
    border-radius: 0.5rem;
  }

  .header-link {
    position: relative;
    padding-inline: 2.8rem;
    padding-block: 1rem;
    font-weight: 600;
  }
`;
