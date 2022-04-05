import * as React from "react";
import { GetStaticProps } from "next";
import fetchTabs, {fetchPages, PageTab, LinkedPage} from "../data";
import TabPage from "./tabs/[tab]";
import Head from "next/head";

export default function Page(props: {tab: string, tabs: PageTab[], pages: LinkedPage[]}) {
    const { tab } = props;
    return <>
        <Head>
            <meta httpEquiv="refresh" content={`0; url=/tabs/${tab}`} />
        </Head>
        <TabPage {...props} />
    </>;
}

export const getStaticProps: GetStaticProps = async () => {
    const tab = "index";
    const tabs = await fetchTabs();
    const pages = await fetchPages(tab as string);
    return {
        props: {
            tab,
            tabs,
            pages
        }
    }
}
