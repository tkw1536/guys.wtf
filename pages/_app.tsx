import * as React from 'react';
import '../styles/latex.css'
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  return <>
    <Script async strategy="beforeInteractive" src="https://inform.everyone.wtf/legal.min.js?float" data-site-id="95fff7db-30c8-4480-ae71-58a1b20cd971" />
    <Component {...pageProps} />
  </>
}
