import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';

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

  .rounded-full {
    border-radius: 100%;
  }

  .header-link {
    position: relative;
    padding-inline: 2.8rem;
    padding-block: 1rem;
    font-weight: 600;
  }
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
