import { useEffect, useState } from 'react';

import {
  Box,
  chakra,
  HStack,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { Menu, Remixicon } from '@emotion-icons/remix-fill';
import { isValidMotionProp, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Layout } from '@/elements/organisms';
import { useScrollPosition } from '@/hooks';
import { CustomRoutesDefault } from '@/utils';

import Image from 'next/image';

import Banner1 from '/public/jpg/hero.jpg';

const links = [
  {
    id: 1,
    label: 'Home',
    url: CustomRoutesDefault.home(),
  },
  {
    id: 3,
    label: 'About me',
    url: CustomRoutesDefault.about(),
  },
  {
    id: 2,
    label: 'Projects',
    url: CustomRoutesDefault.projects(),
  },
];
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
});
export const Header = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  const router = useRouter();
  const onScroll = useScrollPosition();

  useEffect(() => {
    if (onScroll > 20) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }, [onScroll]);

  return (
    <Box
      as="header"
      paddingY="1rem"
      position="fixed"
      width="100%"
      top={0}
      zIndex={11}
      transition="all 200ms ease-in-out"
      backdropFilter={`${isScroll ? 'blur(60px)' : 'blur(0px)'}`}
      backgroundColor={`${isScroll ? 'blueAlpha.500' : 'transparent'}`}
      borderBottomWidth="1px"
      borderColor={`${isScroll ? 'blue.200' : 'transparent'}`}
    >
      <Layout>
        <HStack margin={0} justifyContent="space-between">
          <Link href="/">
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.05025 10.5511C-0.683419 13.2848 -0.683416 17.717 2.05025 20.4506L9.65075 28.0511C12.3844 30.7848 16.8166 30.7848 19.5503 28.0511L27.1508 20.4506C29.8844 17.717 29.8844 13.2848 27.1507 10.5511L19.5502 2.95064C16.8166 0.216971 12.3844 0.216975 9.65075 2.95064L2.05025 10.5511ZM16.2085 8.2762H13.3105V20.4802C13.3105 20.9722 13.2385 21.3322 13.0945 21.5602C12.9625 21.8002 12.7345 21.9202 12.4105 21.9202C12.0385 21.9202 11.7145 21.8662 11.4385 21.7582L11.3305 23.9002C11.6185 24.0802 12.2365 24.1702 13.1845 24.1702C14.1685 24.1702 14.9185 23.8642 15.4345 23.2522C15.9505 22.6642 16.2085 21.7282 16.2085 20.4442V8.2762Z"
                fill="#15D6D6"
              />
            </svg>
          </Link>
          <Box as="nav" display={{ base: 'none', lg: 'block' }}>
            <UnorderedList display="flex" listStyleType="none" padding={0}>
              {links &&
                links.map((_, i) => (
                  <ListItem key={i}>
                    <Link className="header-link" href={_.url}>
                      <Text textStyle="textParagraph02">{_.label}</Text>
                      {router.asPath === _?.url && (
                        <ChakraBox
                          className="header-link-indicator"
                          backgroundColor="secondary.main"
                          layoutId="rect"
                          position="absolute"
                          height="3px"
                          width="100%"
                          bottom={0}
                          left={0}
                          borderRadius="6px"
                          //eslint-disable-next-line @typescript-eslint/ban-ts-comment
                          // @ts-ignore
                          transition={{ duration: 0.4, type: 'spring' }}
                        ></ChakraBox>
                      )}
                    </Link>
                  </ListItem>
                ))}
            </UnorderedList>
          </Box>
          <Box as="button" display={{ lg: 'none' }}>
            <Menu width="1.7rem" color="gray.100" />
          </Box>
        </HStack>
      </Layout>
    </Box>
  );
};
