import * as React from 'react';
import Router from 'next/router';
import { GetStaticProps } from "next";
import fetchTabs, {fetchPages, PageTab, LinkedPage} from "../data";
import Tab from "./tabs/[tab]";

export default class extends React.Component<{tab: string, tabs: PageTab[], pages: LinkedPage[]}> {
    render() {
        return <Tab {...this.props} />;
    }
    componentDidMount() {
        const { tab } = this.props;
        Router.replace(`/tabs/${tab}`, );
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
