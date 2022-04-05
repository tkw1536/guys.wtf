import * as React from "react";
import { PageTab, LinkedPage } from "../data";
import Head from "next/head";
import Link from "next/link";

import style from "./tab.module.css";


export default function Tab({ tab, tabs, pages }: { tab: string, tabs: PageTab[], pages: LinkedPage[] }) {
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
        <p className={style.tabList} role="tablist">
            {tabs.map((t, idx) => <TabLink key={t.name} tab={t} active={t.name === tab} last={idx === lastTabIndex} />)}
        </p>
        <ul className={style.pageContainer} role="tabpanel">
            {pages.map(({ domain, title }) => <WTFLink key={domain} url={domain}>{title}</WTFLink>)}
        </ul>
    </>;
}


function TabLink({ active, tab: { title, name }, last }: { tab: PageTab, active: boolean, last: boolean }) {
    return <Link href={`/tabs/${name}`}>
        <a role="tab" className={active ? style.active : ""}>{title}</a>
    </Link>;
}

function WTFLink({ url, children }: { url: string, children: string }) {
    return <li>
        <a href={`https://${url}`} rel="noopener noreferrer">{url}</a><span dangerouslySetInnerHTML={children ? { __html: ` - ${children}` } : undefined} />
    </li>;
}
