import { Global, ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

import initMockAPI from '@/mocks';
import globalStyle from '@/styles/globalStyle';
import theme from '@/styles/theme';
import '@/styles/fonts.css';

const queryClient = new QueryClient();

if (process.env.NODE_ENV === 'development') {
  initMockAPI();
}

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My own boilerplate</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Global styles={globalStyle} />
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}

export default App;
