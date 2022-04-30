import * as React from "react";
import { GetStaticProps } from "next";
import TabPage, { TabProps } from "./tabs/[tab]";
import Head from "next/head";
import { getMetas, getTagTab } from "../projects";

export default function Page(props: TabProps) {
    return <>
        <Head>
            <meta httpEquiv="refresh" content={`0; url=/tabs/${props.tagtab.id}`} />
        </Head>
        <TabPage {...props} />
    </>;
}

export const getStaticProps: GetStaticProps = async () => {
    const metas = getMetas();
    const tagtab = await getTagTab("index")
    return {
        props: {
            metas,
            tagtab,
        }
    }
}