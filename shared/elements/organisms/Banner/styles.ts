import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Image from 'next/image';

export const StyledBannerImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledBannerContainer = styled(Box)`
  position: relative;
  height: 31.25rem;

  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.colors.blueAlpha[700]};
  }
`;
