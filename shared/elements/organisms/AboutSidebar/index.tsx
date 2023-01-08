import { Box, Divider, HStack, VStack } from '@chakra-ui/react';

import { AboutProfile, AboutSkills } from '@/elements/molecules';
import { Container } from '@/elements/organisms';

export const AboutSidebar = () => {
  return (
    <Container sx={{ display: { base: 'none', lg: 'block' } }}>
      <VStack as="aside" alignItems="start" spacing="3rem">
        <AboutProfile />
        <Divider variant="base" />
        <AboutSkills />
      </VStack>
    </Container>
  );
};
