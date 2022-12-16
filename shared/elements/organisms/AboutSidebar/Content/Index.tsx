import { useEffect, useState } from 'react';

import { Badge, Box, HStack, Text, Tooltip, VStack } from '@chakra-ui/react';

import { softSkills, techStack, tools, contact } from '@/data/profile';
import { TooltipLabel } from '@/elements/atoms/TooltipLabel';
import {
  StyledEmail,
  StyledGithub,
  StyledLinkedin,
} from '@/elements/organisms/AboutSidebar/styles';
import { IBadge } from '@/interfaces';

export const Content = () => {
  const [techStackList, setTechStackList] = useState<IBadge[]>([]);
  const [toolsList, setToolsList] = useState<IBadge[]>([]);
  const [softSkillsList, setSoftSkillsList] = useState<IBadge[]>([]);
  const [contactList, setContactList] = useState<IBadge[]>([]);

  useEffect(() => {
    if (techStack?.length > 0) {
      setTechStackList(techStack);
    }
    if (tools?.length > 0) {
      setToolsList(tools);
    }
    if (softSkills?.length > 0) {
      setSoftSkillsList(softSkills);
    }
    if (contact?.length > 0) {
      setContactList(contact);
    }
  }, [tools, techStack, softSkills, contact]);

  return (
    <Box>
      <VStack alignItems="start" spacing="2.375rem">
        {techStackList && techStackList?.length > 0 && (
          <Box>
            <Text textStyle="subheading05" color="gray.300" fontWeight="600">
              Tech Stack
            </Text>
            <HStack
              flexWrap="wrap"
              spacing={0}
              gap="0.625rem"
              marginTop="1.25rem"
            >
              {techStackList.map((_) => (
                <Badge key={_?.id} variant="outline" color={`${_?.color}`}>
                  {_?.label}
                </Badge>
              ))}
            </HStack>
          </Box>
        )}
        <Box>
          <Text textStyle="subheading05" color="gray.300">
            Tools
          </Text>
          <HStack
            flexWrap="wrap"
            spacing={0}
            gap="0.625rem"
            marginTop="1.25rem"
          >
            {toolsList.map((_) => (
              <Badge key={_?.id} variant="outline" color={`${_?.color}`}>
                {_?.label}
              </Badge>
            ))}
          </HStack>
        </Box>

        <Box>
          <Text textStyle="subheading05" color="gray.300">
            Soft Skills
          </Text>
          <HStack
            flexWrap="wrap"
            spacing={0}
            gap="0.625rem"
            marginTop="1.25rem"
          >
            {softSkillsList.map((_) => (
              <Badge key={_?.id} variant="outline" color={`${_?.color}`}>
                {_?.label}
              </Badge>
            ))}
          </HStack>
        </Box>

        <Box>
          <Text textStyle="subheading05" color="gray.300">
            Contact
          </Text>
          <HStack flexWrap="wrap" spacing={0} gap="1.25rem" marginTop="1.25rem">
            <Tooltip
              hasArrow
              backgroundColor="primary.main"
              color="blue.500"
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
              backgroundColor="primary.main"
              color="blue.500"
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
              backgroundColor="primary.main"
              color="blue.500"
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
