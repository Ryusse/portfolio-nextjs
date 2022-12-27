import { FC, ReactElement, ReactNode } from 'react';

import { ChakraProvider } from '@chakra-ui/provider';
import { Global } from '@emotion/react';
import { GlobalStyles } from '@styles/utils/custom';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';

import theme from '../styles/theme';
import { Header } from '@/elements/organisms';

interface Props {
  children: ReactNode;
}

const MyComponent = ({ children }: Props) => {
  return <>{children}</>;
};

export interface ChakraProps extends AppProps {
  Component: NextPageWithLayout;
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const App: FC<ChakraProps> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <>
      <ChakraProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <Header />
        {getLayout(
          <MyComponent>
            <Component {...pageProps} />
          </MyComponent>
        )}
      </ChakraProvider>
    </>
  );
};

export default App;
