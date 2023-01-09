import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import theme from '@styles/theme';

export const StyledBannerContainer = styled(Box)`
  position: relative;
  height: 100vh;

  @media screen and (min-width: ${theme.breakpoints.lg}) {
    height: 31.25rem;
  }

  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: ${theme.colors.blueAlpha[700]};
  }
`;
