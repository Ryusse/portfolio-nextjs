import { ReactNode } from 'react';

import { Box } from '@chakra-ui/react';

interface Props {
  sx?: any;
  children: ReactNode;
}

export const Container = ({ sx, children }: Props) => {
  return (
    <Box
      sx={sx}
      borderWidth="1px"
      borderColor="blue.200"
      width="100%"
      padding={{ base: '1rem', md: '1.875rem' }}
      backdropFilter="blur(12.5px)"
      backgroundColor="blueAlpha.700"
      borderRadius="0.625rem"
    >
      {children}
    </Box>
  );
};
