import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

import { experience } from '@/data/experience';
import {
  AboutDescription,
  AboutWorkExperience,
  AccordionExperienceContent,
  AccordionExperienceHeader,
} from '@/elements/molecules';
import { Container } from '@/elements/organisms';

export const AboutContent = () => {
  return (
    <Container
      sx={{
        paddingTop: { base: 6, md: '1.875rem' },
        borderTopRadius: { base: '35px', lg: '0.625rem' },
        borderBottomRadius: { base: 0, lg: '0.625rem' },
      }}
    >
      <VStack spacing={{ base: '2rem', lg: '4rem' }}>
        <AboutDescription />
        <Divider variant="base" />
        <AboutWorkExperience />
      </VStack>
    </Container>
  );
};
