import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import { store } from '../src/redux/store';

import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import * as locales from '../locale';

import { AuthProvider } from '../src/firebase/auth';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const router = useRouter();
  const { locale, defaultLocale } = router;
  const localeCopy = locales[locale];
  const messages = localeCopy;

  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, [router])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Best Miniatures</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Provider store={store}>
          <IntlProvider locale={locale}
            defaultLocale={defaultLocale} messages={messages}>
            {
              loading ? Loading
                :
                <AuthProvider>
                  <Component {...pageProps} />
                </AuthProvider>
            }
          </IntlProvider>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
