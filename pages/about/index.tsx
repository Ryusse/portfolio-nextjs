import { ReactElement } from 'react';

import { NextPage } from 'next';

import { Banner, Container, GridWrapper } from '@/elements/organisms';

const About: NextPage = () => {
  return (
    <div>
      <Banner />
      <GridWrapper>
        <Container>
          <h2>Containerrr</h2>
        </Container>
      </GridWrapper>
    </div>
  );
};

export default About;
