import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

import ProfileImage from '../../../../public/jpg/hero.jpg';

export const AboutProfileMobile = () => {
  return (
    <Box
      display="grid"
      placeContent="center"
      width="100%"
      position="absolute"
      zIndex={10}
      top={140}
    >
      <Box position="relative" display={{ base: 'block', lg: 'none' }}>
        <Box
          zIndex={1}
          position="absolute"
          right="-60px"
          backgroundColor="gray.100"
          borderRadius={10}
          paddingX={3}
          paddingY={2}
        >
          <Box
            position="absolute"
            top={2}
            right={2}
            borderRadius="100%"
            backgroundColor="secondary.main"
            width={2}
            height={2}
          ></Box>
          <Text color="blue.100" textStyle="textParagraph03" marginRight={2}>
            Open to work ...
          </Text>
        </Box>
        <Box
          as="figure"
          width="80px"
          height="80px"
          position="relative"
          borderRadius="100%"
          marginTop="1rem"
          marginX="auto"
          borderWidth={2}
          borderColor="gray.300"
        >
          <Image
            className="w-full h-full object-cover rounded-full"
            src={ProfileImage.src}
            alt="profile image"
            quality={100}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </Box>
        <Box marginTop={5}>
          <Text
            fontWeight={700}
            textAlign="center"
            textStyle="subheading03"
            color="gray.100"
          >
            Joel Angel
          </Text>
          <Text
            marginTop={1}
            fontWeight={500}
            textAlign="center"
            textStyle="textParagraph01"
            color="gray.400"
          >
            Frontend developer
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
