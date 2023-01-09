import { Box, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';
import { Github, Linkedin } from '@emotion-icons/boxicons-logos';

import { Layout } from '@/elements/organisms';

const links = [
  {
    id: 1,
    link: '#',
    icon: <Github color="gray.100" width="1.6rem" />,
  },
  {
    id: 2,
    link: '#',
    icon: <Linkedin color="gray.100" width="1.6rem" />,
  },
];

export const Footer = () => {
  return (
    <Box
      as="footer"
      position="relative"
      width="100%"
      zIndex={11}
      paddingY="1.5rem"
      borderTopWidth="1px"
      borderColor="blue.200"
      backgroundColor="blueAlpha.700"
    >
      <Layout>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text>© 2022, Designed & Built by Joel 😼 </Text>
          <UnorderedList listStyleType="none" display="flex" gap={4}>
            {links &&
              links.map((_, i) => (
                <ListItem key={i}>
                  <a href={_.link}>{_?.icon}</a>
                </ListItem>
              ))}
          </UnorderedList>
        </Stack>
      </Layout>
    </Box>
  );
};
