import { Box, Divider, Heading, HStack, Stack, Text } from '@chakra-ui/react';

import ProfileImage from '/public/jpg/hero.jpg';

import {
  StyledLocationIcon,
  StyledProfileImage,
} from '@/elements/organisms/AboutSidebar/styles';

export const AboutProfile = () => {
  return (
    <>
      <Stack as="header" direction="row" gap="1.875rem">
        <Box
          as="figure"
          width="80px"
          height="80px"
          position="relative"
          borderRadius="100%"
          marginTop="1rem"
        >
          <StyledProfileImage
            src={ProfileImage.src}
            alt="profile image"
            quality={100}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          ></StyledProfileImage>
        </Box>
        <Box margin={0}>
          <Heading
            as="h1"
            textStyle="subheading01"
            size="1px"
            marginBottom="4px"
            color="gray.300"
          >
            Joel Angel
          </Heading>
          <Text textStyle="textParagraph02">Frontend developer</Text>
          <HStack marginTop="24px" spacing="10px">
            <Box
              width="12px"
              height="12px"
              backgroundColor="secondary.main"
              borderRadius="100%"
            ></Box>
            <Text textStyle="textParagraph02">Open to work</Text>
          </HStack>
          <HStack marginTop="10px" spacing="10px">
            <StyledLocationIcon />
            <Text textStyle="textParagraph02">Lima, Perú</Text>
          </HStack>
        </Box>
      </Stack>
    </>
  );
};
