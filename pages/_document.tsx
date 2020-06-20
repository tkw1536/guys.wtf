import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
        <script async src="https://track.everyone.wtf/tracker.js" data-ackee-server="https://track.everyone.wtf" data-ackee-domain-id="95fff7db-30c8-4480-ae71-58a1b20cd971"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
};
