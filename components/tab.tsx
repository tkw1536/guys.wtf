import * as React from 'react';
import {PageTab, LinkedPage} from "../data";
import Head from 'next/head';
import Link from 'next/link';

import style from './tab.module.css';


export default class Tab extends React.Component<{tab: string, tabs: PageTab[], pages: LinkedPage[]}> {
    render() {
        const { tab, tabs, pages } = this.props;
        const lastTabIndex = tabs.length - 1;
        return <>
            <Head>
                <title>guys.wtf</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            </Head>
            <h1>guys.wtf &gt; x.com</h1>
            <p>
                This page contains a list of pages on <code>guys.wtf</code> and related domains that I (or some of my friends) have made.
                Most of these are pointless, but still work.
                If you have an idea for a new one or a suggestion for improvement, email me at <a href="mailto:jesus@guys.wtf">jesus@guys.wtf</a>.
            </p>
            <p className={style.tabList}>
                {tabs.map((t, idx) => <TabLink key={t.name} tab={t} active={t.name === tab} last={idx === lastTabIndex} />)}
            </p>
            <ul className={style.pageContainer}>
                {pages.map(({ domain, title }) => <WTFLink key={domain} url={domain}>{title}</WTFLink>)}
            </ul>
            <p>
                This page is powered by <a href="https://nextjs.org/">NEXT.js</a> and <a href="https://github.com/davidrzs/latexcss">latex.css</a>.
            </p>
        </>;
    }
}


class TabLink extends React.Component<{ tab: PageTab, active: boolean, last: boolean }> {
    render() {
        const { active, tab: { title, name }, last } = this.props;
        return <>
            <Link href={`/tabs/${name}`}>
                <a className={ active ? style.active : ''}>{title}</a>
            </Link>
        </>;
    }
}

class WTFLink extends React.Component<{ url: string, children: string }> {
    render() {
        const { url, children } = this.props;
        return <li>
            <a href={`https://${url}`}>{url}</a><span dangerouslySetInnerHTML={children ? { __html: ` - ${children}` } : undefined} />
        </li>;
    }
}
