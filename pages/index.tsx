import * as React from 'react';
import { GetStaticProps } from "next";
import fetchTabs, {fetchPages, PageTab, LinkedPage} from "../data";
import Tab from "./tabs/[tab]";
import Head from "next/head";

export default class extends React.Component<{tab: string, tabs: PageTab[], pages: LinkedPage[]}> {
    render() {
        const { tab } = this.props;
        return <>
            <Head>
                <meta httpEquiv="refresh" content={`0; url=/tabs/${tab}`} />
            </Head>
            <Tab {...this.props} />
        </>;
    }
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
