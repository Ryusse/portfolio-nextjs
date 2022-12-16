import { ReactNode } from 'react';

import { Container } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

export const GridWrapper = ({ children }: Props) => {
  return <Container>{children}</Container>;
};
