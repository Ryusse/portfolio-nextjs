import { Box } from '@chakra-ui/react';

import { Content } from '../AboutSidebar/Content/Index';
import { Container } from '@/elements/organisms';
import { Header } from '@/elements/organisms/AboutSidebar/Header';

export const AboutSidebar = () => {
  return (
    <Container>
      <Box as="aside">
        <Header />
        <Content />
      </Box>
    </Container>
  );
};
