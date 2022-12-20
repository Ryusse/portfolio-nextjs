import {
  Badge,
  Box,
  Grid,
  HStack,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import { LocationPin } from '@emotion-icons/entypo';
import { ExternalLink } from '@emotion-icons/evil';
import { Business } from '@emotion-icons/ionicons-solid';
import Image from 'next/image';

import { IExperienceContent } from '@/interfaces/experience';

interface ContentProps {
  content: IExperienceContent;
}

export const TabContent = ({ content }: ContentProps) => {
  return (
    <Grid templateColumns="1fr auto" gap={6}>
      <Box>
        <Stack direction="row" alignItems="center" gap="1rem">
          <HStack>
            <LocationPin width="1.2rem" />
            <Text textStyle="textParagraph02">{content?.location}</Text>
          </HStack>
          <HStack
            as="a"
            cursor="pointer"
            href={content?.externalLink}
            target="_blank"
            data-group
          >
            <Box _groupHover={{ color: 'secondary.main' }}>
              <ExternalLink width="1.5rem" />
            </Box>
            <Text
              textStyle="textParagraph02"
              _groupHover={{ color: 'secondary.main' }}
            >
              {content?.link}
            </Text>
          </HStack>
        </Stack>
        <Box textStyle="textParagraph02" marginTop="0.8rem">
          {content?.description}
        </Box>
        <HStack marginTop="1rem" flexWrap="wrap" spacing={0} gap="0.625rem">
          {content?.techStack &&
            content?.techStack.map((_, i) => (
              <Badge key={i} variant="solid" colorScheme="green">
                {_?.label}
              </Badge>
            ))}
        </HStack>
      </Box>
      <Box as="figure" position="relative" width="6.25rem" height="6.25rem">
        <Image
          src={content?.logo?.src}
          alt="wiestate logo"
          className="w-full h-full object-cover rounded-8"
          fill
          quality={50}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Box>
    </Grid>
  );
};

interface AccordionProps {
  content: IExperienceContent[];
}
export const AccordionExperienceContent = ({ content }: AccordionProps) => {
  return (
    <Tabs orientation="vertical" id="tabs-1" variant="line" isFitted>
      <TabList>
        {content &&
          content.map((_, i) => (
            <Tab
              key={i}
              width="100%"
              padding="1rem"
              justifyContent="start"
              alignItems="center"
              _selected={{
                color: 'secondary.main',
                borderColor: 'secondary.main',
              }}
            >
              <HStack alignItems="center">
                <Business width="1rem" />
                <Text>{_?.title}</Text>
              </HStack>
            </Tab>
          ))}
      </TabList>
      <TabPanels>
        {content &&
          content.map((_, i) => (
            <TabPanel key={i}>
              <TabContent content={_} />
            </TabPanel>
          ))}
      </TabPanels>
    </Tabs>
  );
};
