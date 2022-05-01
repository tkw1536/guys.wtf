import { GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"
import { platform } from "os"
import * as React from "react"
import { getAllProjects } from "../../projects"
import { Frameworks, Languages, Features, Providers, Kinds } from "../../projects/meta"
import { ProjectWithID } from "../../projects/types"
import styles from "./index.module.css"

const GITHUB = "https://github.com/"

export default function Page(props: { projects: Array<ProjectWithID>}) {
    const features = Object.entries(Features).map(([id, value]) => ({id, ...value})).sort((a, b) => a.name < b.name ? -1 : (a.name > b.name ? 1 : 0))

    return <>
        <Head>
            <title>Projects - guys.wtf</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        <h1>All Projects</h1>
        <table>
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Git
                    </th>

                    <th>
                        Language
                    </th>
                    <th>
                        Framework
                    </th>
                    {features.map(feat =>
                        <th key={feat.id} title={feat.description} className={styles.feature}>
                            <code>{feat.short}</code>
                        </th>
                    )}

                    <th>
                        Deployment
                    </th>
                    <th className={styles.deployment} title="Tracking">
                        T
                    </th>
                    <th className={styles.deployment}>
                        Kind
                    </th>
                </tr>
            </thead>
            <tbody>
            {props.projects.map(p =>
                <tr key={p.id}>
                    <td>
                        <Link href={`/projects/${p.id}/`}>
                            <a>
                                {p.name}
                            </a>
                        </Link>
                    </td>

                    <td>
                        <GitURL url={p.git} />
                    </td>

                    <td>
                        {Languages[p.implementation.language].name}
                    </td>
                    <td>
                        {Frameworks[p.implementation.framework]?.name}
                    </td>
                    {features.map(feat => {
                        const enabled = (p.implementation.features ?? {})[feat.id]
                        return <td key={feat.id}>
                            { enabled === true ? <code>T</code> : (enabled === false ? <code>F</code> : undefined)}
                        </td>
                    })}

                    <td>
                        {p.deployment?.domain && <>
                            <a href={`https://${p.deployment?.domain}`} target="_blank" rel="noopener noreferrer">
                            {p.deployment.domain}
                            </a>
                            {" @ "}
                            <ProviderLink provider={p.deployment?.provider} />
                        </>}
                    </td>
                    <td>
                        {p.deployment.tracking ? <code>T</code> : <code>F</code>}
                    </td>
                    <td>
                        <KindLink kind={p.deployment?.kind} />
                    </td>                    
                </tr>
            )}
            </tbody>
        </table>
    </>
}

function GitURL({url} : {url: string | undefined }) {
    if (!url) return null;
    if(url.startsWith(GITHUB)) {
        return <a href={url} target="_blank" rel="noopener noreferrer" className={styles.github}><span>{url.substring(GITHUB.length)}</span></a>
    }
    return <code>{url}</code>;
}


function ProviderLink({ provider }: {provider?: string}) {
    if (!provider) return null;

    const prov = Providers[provider]
    return prov.href ? (
        <a href={prov.href} target="_blank" rel="noopener noreferrer">
            {prov.short}
        </a>
    ) : (
        prov.short
    );
}

function KindLink({ kind }: {kind?: string}) {
    if (!kind) return null;

    const knd = Kinds[kind]
    return knd.href ? (
        <a href={knd.href} target="_blank" rel="noopener noreferrer">
            {knd.name}
        </a>
    ) : (
        knd.name
    );
}


export const getStaticProps: GetStaticProps = async () => {
    const projects = await getAllProjects()
    return {
        props: {
            projects,
        }
    }
}