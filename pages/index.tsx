import * as React from 'react';
import Head from 'next/head';

import network from '../data/network.json';

export default class Home extends React.Component {
  render() {
    return <>
      <Head>
        <title>Big if true</title>
      </Head>
      <h1>guys.wtf &gt; x.com</h1>
      <p>
        Find below a list of pages related to guys.wtf. 
      </p>
      <ul>
        {network.map(([url, text]) => <WTFLink key={url} url={url}>{text}</WTFLink> )}
      </ul>
    </>;
  }
}

class WTFLink extends React.Component<{url: string, children: string}> {
  render() {
    const {url, children} = this.props;
    return <li>
      <a href={`https://${url}`} children={url}/> - {children}
    </li>;
  }
}