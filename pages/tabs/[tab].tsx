import * as React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import fetchTabs, {fetchPages, PageTab, LinkedPage} from "../../data";

import Tab from '../../components/tab';


export default class extends React.Component<{tab: string, tabs: PageTab[], pages: LinkedPage[]}> {
    render() {
        return <Tab {...this.props} />;
    }
}

export const getStaticProps: GetStaticProps = async ({params: {tab}}) => {
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


export const getStaticPaths: GetStaticPaths = async () => {
    const tabs = await fetchTabs();

    return {
        paths: tabs.map(({ name }) => ({params: {tab: name}})),
        fallback: false,
    };
}