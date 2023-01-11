import { Divider, VStack } from '@chakra-ui/react';

import {
  AboutDescription,
  AboutSkills,
  AboutWorkExperience,
} from '@/elements/molecules';
import { Container } from '@/elements/organisms';

export const AboutContent = () => {
  return (
    <Container
      sx={{
        paddingY: { base: 6, md: '1.875rem' },
        borderTopRadius: { base: '35px', lg: '0.625rem' },
        borderBottomRadius: { base: 0, lg: '0.625rem' },
        borderWidth: { base: 0, lg: 1 },
      }}
    >
      <VStack spacing={{ base: '2rem', lg: '4rem' }}>
        <AboutDescription />
        <Divider variant="base" />
        <AboutWorkExperience />
        <Divider
          variant="base"
          sx={{
            display: { base: 'block', lg: 'none' },
          }}
        />
        <AboutSkills
          containerStyles={{
            display: { base: 'block', lg: 'none' },
          }}
        />
      </VStack>
    </Container>
  );
};
