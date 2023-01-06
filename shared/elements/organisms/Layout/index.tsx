import { ReactNode } from 'react';

import { Container, Grid, SimpleGrid } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

interface Props {
  columns?: number;
}

export const Layout = ({ children, columns = 1 }: Props) => {
  return (
    <Container maxW="container.xl">
      <Grid
        templateColumns={{
          base: '1fr',
          lg: `${columns === 2 ? '380px 1fr ' : '1fr'}`,
        }}
        gap={6}
        width="100%"
      >
        {children}
      </Grid>
    </Container>
  );
};
