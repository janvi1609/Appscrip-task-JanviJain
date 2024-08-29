import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Online Store - Appscrip Task</title>
        <meta name="description" content="A demo online store built for evaluation purposes." />
        <meta name="keywords" content="online store, ecommerce, demo, products, appscrip" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Online Store - Appscrip Task" />
        <meta property="og:description" content="A demo online store built for evaluation purposes." />
        <meta property="og:image" content="/path-to-your-image.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
