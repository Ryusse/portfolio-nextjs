import { ReactNode } from 'react';

import { Box } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <Box
      padding="1.875rem"
      backdropFilter="blur(12.5px)"
      backgroundColor="blueAlpha.700"
      borderRadius="0.625rem"
    >
      {children}
    </Box>
  );
};
