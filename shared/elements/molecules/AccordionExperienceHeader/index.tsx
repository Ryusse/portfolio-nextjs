import { HStack, IconButton, Stack, Text } from '@chakra-ui/react';
import { PlusLg } from '@emotion-icons/bootstrap';
import { Minus } from '@emotion-icons/boxicons-regular';
import { Calendar } from '@emotion-icons/zondicons';

import { IExperienceHeader } from '@/interfaces/experience';

interface Props {
  isExpanded: boolean;
  header: IExperienceHeader;
}
export const AccordionExperienceHeader = ({ isExpanded, header }: Props) => {
  return (
    <Stack
      as="div"
      width="100%"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text textAlign="left" marginRight={{ base: '2.8rem', lg: '0rem' }}>
        {header?.title}
      </Text>
      <HStack gap="1.8rem" flexDir="row" position="relative">
        <Stack
          display={{ base: 'none', md: 'flex' }}
          direction="row"
          alignItems="center"
          gap="10px"
          marginRight="5rem"
        >
          <Calendar width="1rem" />
          <Text>
            {header?.start} - {header?.end}
          </Text>
        </Stack>
        <IconButton
          as="div"
          cursor="pointer"
          aria-label="open accordion"
          rounded="full"
          position="absolute"
          right={0}
          size="md"
          _groupHover={{
            color: 'secondary.main',
          }}
          icon={isExpanded ? <Minus width="1rem" /> : <PlusLg width="1rem" />}
        />
      </HStack>
    </Stack>
  );
};
