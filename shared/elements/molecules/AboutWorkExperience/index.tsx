import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  VStack,
} from '@chakra-ui/react';

import { experience } from '@/data/experience';
import {
  AccordionExperienceContent,
  AccordionExperienceHeader,
} from '@/elements/molecules';

export const AboutWorkExperience = () => {
  return (
    <Box as="section" width="100%">
      <Heading
        as="h2"
        textStyle={{ base: 'subheading01', lg: 'heading04' }}
        size="1px"
        marginBottom={{ base: '2rem', lg: '3.4rem' }}
        textAlign="center"
        color="gray.300"
      >
        My work experience
      </Heading>
      <VStack spacing="1rem">
        {experience &&
          experience.map((_, i) => (
            <Accordion key={i} allowMultiple width="100%">
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton data-group>
                      <AccordionExperienceHeader
                        isExpanded={isExpanded}
                        header={_?.header}
                      />
                    </AccordionButton>
                    <AccordionPanel marginTop="1rem">
                      <AccordionExperienceContent content={_?.content} />
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          ))}
      </VStack>
    </Box>
  );
};
