import * as React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { getProject, getProjectIDs } from "../../projects";
import { Project } from "../../projects/types";

interface ProjectProps {
    project: Project,
}

export default function Page({ project }: ProjectProps) {
    return <>
        <Head>
            <title>{project.name} - guys.wtf</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        <h1>{project.name}</h1>
        <div>
            <code>{JSON.stringify(project)}</code>
        </div>
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
    const ids = getProjectIDs().slice(0, 0); // disabled for now

    return {
        paths: ids.map( id => ({params: {project: id}})),
        fallback: false,
    };
}