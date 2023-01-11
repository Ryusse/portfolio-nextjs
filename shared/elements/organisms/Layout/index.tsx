import { ReactNode } from 'react';

import { Container, Grid, SimpleGrid } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

interface Props {
  columns?: number;
  containerStyles?: any;
}

export const Layout = ({ children, columns = 1, containerStyles }: Props) => {
  return (
    <Container
      sx={containerStyles}
      paddingX={{ base: 4, lg: 0 }}
      marginX="auto"
      maxW="1312px"
      width={{ base: '100%', lg: 'calc(100% - 120px)' }}
    >
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

/*
mx-auto h-full w-full max-w-[1512px] md:w-[calc(100%-5rem)] lg:w-[calc(100%-120px)]*/
