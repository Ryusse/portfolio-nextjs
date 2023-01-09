import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';

import { CircleDecorator } from '@/elements/atoms';
import { AboutProfileMobile } from '@/elements/molecules';
import {
  AboutContent,
  AboutSidebar,
  Banner,
  Layout,
} from '@/elements/organisms';

const About: NextPage = () => {
  return (
    <>
      <Box
        display={{ base: 'none', lg: 'block' }}
        width={{ base: '20rem', lg: '525px' }}
        height={{ base: '17rem', lg: '394px' }}
        position="absolute"
        left={0}
        top={0}
        zIndex={2}
        transform="rotate(180deg)"
      >
        <CircleDecorator />
      </Box>
      <Banner>
        <AboutProfileMobile />
      </Banner>
      <Box
        width="100%"
        position="relative"
        top={{ base: '-35vh', lg: '-15rem' }}
        zIndex={10}
        left="50%"
        transform="translateX(-50%)"
      >
        <Layout columns={2} containerStyles={{ padding: { base: 0, lg: 4 } }}>
          <AboutSidebar />
          <AboutContent />
        </Layout>
      </Box>
      <Box
        position="absolute"
        right={0}
        display={{ base: 'none', lg: 'block' }}
        bottom={0}
        width={{ base: '20rem', lg: '525px' }}
        height={{ base: '17rem', lg: '394px' }}
      >
        <CircleDecorator />
      </Box>
    </>
  );
};

export default About;
