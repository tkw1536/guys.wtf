import * as React from 'react';
import Head from 'next/head';
import getConfig from 'next/config'

const { publicRuntimeConfig: {buildTime: buildTimeInt} } = getConfig()
const buildTime = new Date(buildTimeInt);

import network from '../data/network.json';
const networkData = network as Array<[string, string, boolean]>;

export default class Home extends React.Component {
  render() {
    return <>
      <Head>
        <title>guys.wtf</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
      </Head>
      <h1>guys.wtf &gt; x.com</h1>
      <p>
        This page contains a list of pages on guys.wtf that I (or some of my friends) have made. 
        Most of these are pointless, but still work. 
        If you have an idea for a new one or a suggestion for improvement, email me at <a href="mailto:jesus@guys.wtf">jesus@guys.wtf</a>.
      </p>
      <ul>
        {networkData.map(([url, text, hide]) => <WTFLink key={url} url={url} hide={hide}>{text}</WTFLink>)}
      </ul>
      <p>
        This page is powered by <a href="https://nextjs.org/">NEXT.js</a> and <a href="https://github.com/davidrzs/latexcss">latex.css</a>. 
        This page was last updated at <code>{buildTime.toUTCString()}</code>. 
      </p>
    </>;
  }
}

class WTFLink extends React.Component<{ url: string, children: string, hide: boolean }> {
  render() {
    const { url, hide, children } = this.props;
    return <li style={!hide ? { textDecoration: 'line-through', opacity: '50%' } : undefined}>
      <a href={`https://${url}`} children={url} /><span dangerouslySetInnerHTML={children ? {__html: ` - ${children}`} : undefined} />
    </li>;
  }
}