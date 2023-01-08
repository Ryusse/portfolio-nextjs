import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';

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
      <Banner>
        <AboutProfileMobile />
      </Banner>
      <Box position={{ base: 'static', lg: 'relative' }}>
        <Box
          width="100%"
          position="absolute"
          top={{ base: '24rem', lg: '-15rem' }}
          zIndex={10}
          left="50%"
          transform="translateX(-50%)"
        >
          <Layout columns={2} containerStyles={{ padding: { base: 0, lg: 4 } }}>
            <AboutSidebar />
            <AboutContent />
          </Layout>
        </Box>
      </Box>
    </>
  );
};

export default About;
