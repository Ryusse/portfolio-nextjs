import { ReactNode } from 'react';

import { Box } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

export const TooltipLabel = ({ children }: Props) => {
  return (
    <Box
      paddingX="0.7rem"
      paddingY="0.425rem"
      borderRadius="1.563rem"
      fontWeight={600}
    >
      {children}
    </Box>
  );
};
