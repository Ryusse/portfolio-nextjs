import { ReactElement } from 'react';

import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';

import { AboutSidebar, Banner, Container, Layout } from '@/elements/organisms';

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
            <Container>
              <h2>Containerrr</h2>
            </Container>
          </Layout>
        </Box>
      </Box>
    </>
  );
};

export default About;
