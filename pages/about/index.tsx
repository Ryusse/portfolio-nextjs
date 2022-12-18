import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';

import {
  AboutContent,
  AboutSidebar,
  Banner,
  Container,
  Layout,
} from '@/elements/organisms';

const About: NextPage = () => {
  return (
    <>
      <Banner />
      <Box position="relative">
        <Box
          width="100%"
          position="absolute"
          top="-15rem"
          zIndex={10}
          left="50%"
          transform="translateX(-50%)"
        >
          <Layout columns={2}>
            <AboutSidebar />
            <AboutContent />
          </Layout>
        </Box>
      </Box>
    </>
  );
};

export default About;
