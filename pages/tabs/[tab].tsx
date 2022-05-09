import * as React from "react"
import type { GetStaticProps, GetStaticPaths } from "next"
import Head from "next/head"
import { getMetas, getTagTab } from "../../projects"
import type { DisplayedProject, TagTab, TagTabMeta } from "../../projects/types"
import styles from "./[tab].module.css"
import Link from "next/link"

export interface TabProps {
    metas: Array<TagTabMeta<string>>
    tagtab: TagTab<string>
}

export default function Tab({ metas, tagtab }: TabProps) {
    const lastTabIndex = metas.length - 1
    return <>
        <Head>
            <title>guys.wtf</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        <h1>guys.wtf &gt; x.com</h1>
        <p>
            This page contains a list of projects on <code>guys.wtf</code> and related domains that I (or some of my friends) have made.
            Most of these are pointless, but I should list them anyways.
            If you have a comment, an idea for a new one or a suggestion for improvement, email me at <a href="mailto:jesus@guys.wtf">jesus@guys.wtf</a>.
        </p>
        <p className={styles.tabList} role="tablist">
            {metas.map((m, idx) => <TabLink key={m.id} meta={m} active={m.id === tagtab.id} last={idx === lastTabIndex} />)}
        </p>
        <ul className={styles.pageContainer} role="tabpanel">
            {tagtab.projects.map(p => <ProjectLink key={p.name} project={p} />)}
        </ul>
    </>
}


function TabLink<Name extends string>({ active, meta: { id: name, title: description }, last }: { meta: TagTabMeta<Name>, active: boolean, last: boolean }) {
    return <Link href={`/tabs/${name}`}>
        <a role="tab" className={active ? styles.active : ""}>{description}</a>
    </Link>
}

function ProjectLink<Name extends string>({ project }: {project: DisplayedProject<Name>}) {
    const { name } = project
    const { tagline, link, title } = project.display
    const url = link ?? project.deployment?.domain
    return <li>
        <a href={`https://${url}`} rel="noopener noreferrer">{title ?? name}</a>
        <span className={styles.tagline} dangerouslySetInnerHTML={tagline ? { __html: tagline } : undefined} />

        <span className={styles.info}>
            <Link href={`/projects/${project.id}`}>
                <a>More Details</a>
            </Link>
        </span>
    </li>
}


export const getStaticProps: GetStaticProps = async ({ params: { tab } }) => {
    const metas = getMetas()
    const tagtab = await getTagTab(typeof tab === "string" ? tab : tab[0])
    return {
        props: {
            metas,
            tagtab,
        },
    }
}


export const getStaticPaths: GetStaticPaths = async () => {
    const metas = getMetas()

    return {
        paths: metas.map(({ id }) => ({ params: { tab: id } })),
        fallback: false,
    }
}