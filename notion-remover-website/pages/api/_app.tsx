import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-M5KD1YEQKX';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    const handleRouteChange = (url) => {
      ReactGA.send({ hitType: 'pageview', page: url });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
