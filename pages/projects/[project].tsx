import * as React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { getProject, getProjectIDs } from "../../projects";
import { ProjectWithID } from "../../projects/types";
import styles from "./[project].module.css"
import { Features, Frameworks, Kinds, Languages, Providers } from "../../projects/meta";

interface ProjectProps {
    project: ProjectWithID,
}

export default function Page({ project }: ProjectProps) {
    const { name, description, id, author, git, implementation, deployment } = project
    const { upstream } = project.implementation
    return <>
        <Head>
            <title>{name} - guys.wtf</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        <h1>{name}</h1>
        <table className={styles.propsTable}>
            <tr>
                <td>Name</td>
                <td>{name}</td>
            </tr>
            <tr>
                <td>Description</td>
                <td dangerouslySetInnerHTML={{__html: description }} />
            </tr>

            { author && <tr>
                <td>Author</td>
                <td>
                    <a href={author.link} target="_blank" rel="noopener noreferrer">{author.name}</a>
                </td>
            </tr>}

            {
                git && <tr className={styles.boundary}>
                    <td>Git Repository</td>
                    <td>
                        <a href={git} target="_blank" rel="noopener noreferrer"><code>{git}</code></a>
                    </td>
                </tr>
            }

            {
                upstream && <tr className={git ? undefined : styles.boundary}>
                    <td>Upstream Repository</td>
                    <td>
                        <a href={upstream} target="_blank" rel="noopener noreferrer"><code>{upstream}</code></a>
                    </td>
                </tr>
            }

            <tr className={(git || upstream) ? undefined : styles.boundary}>
                <td>ID</td>
                <td><code>{id}</code></td>
            </tr>

            <ImplBlock impl={implementation} />

            { deployment && <DeployBlock deployment={deployment} />}
        </table>

        <hr />
    </>;
}

// TODO: This should all be generlized, not be rendered like this

function ImplBlock({ impl: { language, framework, features } }: { impl: ProjectWithID["implementation"] }) {
    const lang = Languages[language] ?? (() => { throw new Error("Unknown language " + language)})()
    const fwork = Frameworks[framework]

    const feats = Object.entries((features ?? {}) as Record<string, boolean>).map(([name, value]) => ({
        first: false,
        value: value,
        ...Features[name]
    }))
    
    // sort features by name
    feats.sort((a, b) => a.name < b.name ? -1 : (a.name > b.name ? 1 : 0))

    // make the first one first
    if (feats.length > 0) feats[0].first = true

    return <>
        <tr className={styles.boundary}>
            <td>
                Language
            </td>
            <td>
                { lang.name ?
                    (
                        lang.href ?
                        <a href={lang.href} target="_blank" rel="noopener noreferrer"><code>{lang.name}</code></a>
                        :
                        <code>{lang.name}</code>
                    )
                    :
                    <>(none)</>
                }
            </td>
        </tr>
        <tr>
            <td>
                Framework
            </td>
            <td>
                {
                    (fwork && fwork.name) ?
                    <a href={fwork.href} target="_blank" rel="noopener noreferrer"><code>{fwork.name}</code></a>
                    :
                    <>(none)</>
                }
            </td>
        </tr>
        
        {feats.map(({ first, value, name, description }) =>
            <tr className={first ? styles.boundary : undefined} key={name}>
                <td>
                    Feature / {name}
                </td>
                <td>
                    <code>{value ? "true" : "false" }</code> <small>({!value && "not "}{description})</small>
                </td>
            </tr>
        )}
    </>
}

function DeployBlock({ deployment: { domain, kind, tracking, provider } }: { deployment: Required<ProjectWithID>["deployment"] }) {
    const prov = Providers[provider] ?? (() => { throw new Error("Unknown provider " + provider)})()
    const knd = Kinds[kind]  ?? (() => { throw new Error("Unknown kind " + kind)})()
    return <>
        <tr className={styles.boundary}>
            <td>
                Deployment (Provider)
            </td>
            <td>
                <a href={`https://${domain}`} target="_blank" rel="noreferrer"><code>{domain}</code></a>
                {" "}

                <small>
                    (<a href={prov.href} target="_blank" rel="noreferrer"><code>{prov.name}</code></a>)
                </small>
            </td>
        </tr>

        <tr>
            <td>
                Kind
            </td>
            <td>
                {knd.href ?
                    <a href={knd.href} target="_blank" rel="noreferrer"><code>{knd.name}</code></a>
                    :
                    <code>{knd.name}</code>
                }
                
            </td>
        </tr>


        <tr>
            <td>
                Tracking
            </td>
            <td>
                <code>{tracking ? "true" : "false" }</code>
            </td>
        </tr>
    </>;
}

export const getStaticProps: GetStaticProps = async ({params: {project: name}}) => {
    const project = await getProject(typeof name === "string" ? name : name[0])
    return {
        props: {
            project,
        }
    }
}


export const getStaticPaths: GetStaticPaths = async () => {
    const ids = getProjectIDs()//.slice(0, 0); // disabled for now

    return {
        paths: ids.map( id => ({params: {project: id}})),
        fallback: false,
    };
}