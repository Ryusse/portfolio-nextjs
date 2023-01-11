import {
  Badge,
  Box,
  Heading,
  HStack,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react';

import { softSkills, techStack, tools } from '@/data/profile';
import { TooltipLabel } from '@/elements/atoms/TooltipLabel';
import {
  StyledEmail,
  StyledGithub,
  StyledLinkedin,
} from '@/elements/organisms/AboutSidebar/styles';

interface Props {
  containerStyles?: any;
}

export const AboutSkills = ({ containerStyles }: Props) => {
  return (
    <Box sx={containerStyles}>
      <Heading
        as="h2"
        textStyle={{ base: 'subheading01', lg: 'heading04' }}
        size="1px"
        marginBottom={{ base: '2rem', lg: '3.4rem' }}
        textAlign="center"
        color="gray.300"
        display={{ lg: 'none' }}
      >
        My skills
      </Heading>
      <VStack alignItems="start" spacing="2.375rem">
        {techStack && techStack?.length > 0 && (
          <Box>
            <Text
              textStyle={{ base: 'textParagraph01', lg: 'subheading03' }}
              color="gray.300"
              fontWeight="600"
            >
              Tech Stack
            </Text>
            <HStack
              flexWrap="wrap"
              spacing={0}
              gap="0.625rem"
              marginTop="1.25rem"
            >
              {techStack.map((_) => (
                <Badge key={_?.id} variant="outline" color={`${_?.color}`}>
                  {_?.label}
                </Badge>
              ))}
            </HStack>
          </Box>
        )}
        <Box>
          <Text
            textStyle={{ base: 'textParagraph01', lg: 'subheading03' }}
            color="gray.300"
            fontWeight="600"
          >
            Tools
          </Text>
          <HStack
            flexWrap="wrap"
            spacing={0}
            gap="0.625rem"
            marginTop="1.25rem"
          >
            {tools.map((_) => (
              <Badge key={_?.id} variant="outline" color={`${_?.color}`}>
                {_?.label}
              </Badge>
            ))}
          </HStack>
        </Box>

        <Box>
          <Text
            textStyle={{ base: 'textParagraph01', lg: 'subheading03' }}
            color="gray.300"
            fontWeight="600"
          >
            Soft Skills
          </Text>
          <HStack
            flexWrap="wrap"
            spacing={0}
            gap="0.625rem"
            marginTop="1.25rem"
          >
            {softSkills.map((_) => (
              <Badge key={_?.id} variant="outline" color={`${_?.color}`}>
                {_?.label}
              </Badge>
            ))}
          </HStack>
        </Box>

        <Box>
          <Text
            textStyle={{ base: 'textParagraph01', lg: 'subheading03' }}
            color="gray.300"
            fontWeight="600"
          >
            Contact
          </Text>
          <HStack flexWrap="wrap" spacing={0} gap="1.25rem" marginTop="1.25rem">
            <Tooltip
              hasArrow
              backgroundColor="secondary.dark"
              color="white"
              borderRadius="1.563rem"
              bottom={4}
              label={<TooltipLabel>Email</TooltipLabel>}
            >
              <Badge
                as="a"
                variant="rounded"
                position="relative"
                cursor="pointer"
              >
                <StyledEmail />
              </Badge>
            </Tooltip>
            <Tooltip
              hasArrow
              backgroundColor="secondary.dark"
              color="white"
              borderRadius="1.563rem"
              bottom={4}
              label={<TooltipLabel>Github</TooltipLabel>}
            >
              <Badge
                as="a"
                variant="rounded"
                position="relative"
                cursor="pointer"
              >
                <StyledGithub />
              </Badge>
            </Tooltip>
            <Tooltip
              hasArrow
              backgroundColor="secondary.dark"
              color="white"
              borderRadius="1.563rem"
              bottom={4}
              label={<TooltipLabel>Linkedin</TooltipLabel>}
            >
              <Badge
                as="a"
                variant="rounded"
                position="relative"
                cursor="pointer"
              >
                <StyledLinkedin />
              </Badge>
            </Tooltip>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};
