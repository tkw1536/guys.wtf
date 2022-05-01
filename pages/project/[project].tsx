import * as React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { getProject, getProjectIDs } from "../../projects";
import { ProjectWithID } from "../../projects/types";
import styles from "./[project].module.css"

interface ProjectProps {
    project: ProjectWithID,
}

export default function Page({ project }: ProjectProps) {
    const { name, description, id, author, git, implementation } = project
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
            
        </table>

        <hr />
    </>;
}

// TODO: This should all be generlized, not be rendered like this

function ImplBlock({ impl }: { impl: ProjectWithID["implementation"] }) {
    if(impl.language === "go") {
        return <>
            <Language name="Go" href="https://go.dev/" />
            <tr>
                <td>Tests</td>
                <td><Bool value={impl.features.tests} /></td>
            </tr>
        </>
    }

    if(impl.language === "html" &&  impl.framework === "jekyll") {
        return <>
            <Language name="HTML" />
            <Framework name="Jekyll" href="https://jekyllrb.com/" />
        </>
    }

    if (impl.language === "html" && impl.framework === "none") {
        return <>
            <Language name="HTML" />
            <Framework />

            <Feature boundary name="darkmode" description="providing a dark mode" value={impl.features.darkmode} />
        </>
    }

    if (impl.language === "typescript" && impl.framework === "nextjs") {
        return <>
            <Language name="TypeScript" href="https://www.typescriptlang.org/" />
            <Framework name="NextJS" href="https://nextjs.org/" />
    
            <Feature boundary name="usingShared" description="using shared components" value={impl.features.usingShared} />
            <Feature name="darkmode" description="providing a dark mode" value={impl.features.darkmode} />
            <Feature name="env" description="using .env for configuration" value={impl.features.env} />
        </>
    }

    if (impl.language === "python" && impl.framework === "django") {
        return <>
            <Language name="Python" href="https://www.python.org/" />
            <Framework name="Django" href="https://www.djangoproject.com/" />
        </>
    }

    if (impl.language === "python" && impl.framework === "bottle") {
        return <>
            <Language name="Python" href="https://www.python.org/" />
            <Framework name="Bottle" href="https://bottlepy.org/" />
        </>
    }
    
    return <Language />
}

function Language({name, href}: {name?: string, href?: string}) {
    return <tr className={styles.boundary}>
        <td>
            Language
        </td>
        <td>
            { name ?
                (
                    href ?
                    <a href={href} target="_blank" rel="noopener noreferrer"><code>{name}</code></a>
                    :
                    <code>{name}</code>
                )
                :
                <>(none)</>
            }
        </td>
    </tr>
}

function Framework({name, href}: { name?: string, href?: string }) {
    return <tr>
        <td>
            Framework
        </td>
        <td>
            {
                name ?
                <a href={href} target="_blank" rel="noopener noreferrer"><code>{name}</code></a>
                :
                <>(none)</>
            }
        </td>
    </tr>
}

function Feature({ boundary, name, description, value }: { boundary?: true, name: string, description: string, value: boolean }) {
    return <tr className={boundary ? styles.boundary : undefined}>
        <td>
            Feature / {name}
        </td>
        <td>
            <code>{value ? "true" : "false" }</code> <small>({!value && "not "}{description})</small>
        </td>
    </tr>
}

function Bool({ value }: { value: boolean }) {
    return <code>{value ? "true" : "false" }</code>
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