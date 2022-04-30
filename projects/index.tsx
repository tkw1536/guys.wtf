import type { Project, TagTabMeta, TagTab, DisplayedProject, ProjectWithID } from "./types";
import { ProjectDisplayKey } from "./types";
export type { Project } from "./types";

import { default as projectIDs } from "./manifest/projects.json";
import { default as tabs } from "./manifest/tabs.json";

/** gets a list of all project names */
export function getProjectIDs(): Array<string> {
    return projectIDs.slice(0);
}

/** gets a specific */
export async function getProject(id: string): Promise<ProjectWithID> {
    if(!projectIDs.includes(id)) {
        throw new Error(`Project ${id} not found`)
    }

    const project = await import("./data/" + id).then(i => i.default as Project)
    return {...project, id: id}
}

/** a promise that imports all projects */
async function allProjects(): Promise<Array<ProjectWithID>> {
    return Promise.all(
        projectIDs.map(getProject)
    )
}


/** loads a list of all available pages */
export function getMetas(): Array<TagTabMeta<string>> {
    return (tabs as Array<[string, string]>)
        .map(([title, id]) => ({
            title, id
        }))
}

/** Loads a single page form the list of known pages */
export async function getTagTab<Name extends string>(name: Name): Promise<TagTab<Name>> {
    const meta = getMetas().find(({ id: mName }) => name === mName) as TagTabMeta<Name> | undefined;
    if (!meta) throw new Error(`Tag ${name} not found`)

    const projects = (await allProjects())
        .filter(project => project.display?.tag === name) as Array<DisplayedProject<Name>>

    return {
        ...meta,
        projects: projects.sort((a, b) => {
            const [aOrder, aName] = ProjectDisplayKey(a)
            const [bOrder, bName] = ProjectDisplayKey(b)
            
            if (aOrder < bOrder) return -1
            if (aOrder > bOrder) return 1
            
            if(aName < bName) return -1
            if(aName > bName) return 1
    
            return 0
        }),
    }
}