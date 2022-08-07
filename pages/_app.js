import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Electric Cars, Solar &amp; Clean Energy | Tesla</title>
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/assets/images/favicon-32x32.png'
        />
        <meta
          name='description'
          content='Tesla is accelerating the world&#039;s transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses.'
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
