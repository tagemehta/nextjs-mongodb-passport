/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import { UserProvider } from '../components/user-context';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
      </Head>
      <div className="overflow-x-hidden font-sans">
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </div>
    </>
  );
}

export default App;
