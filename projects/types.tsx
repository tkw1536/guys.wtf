
/**
 * Project represents a single project
 */
export type Project = {
    name: string; // name of the project
    description: string; // long form description of the project
    git: string; // https:// url to github project
    
    deployment?: Deployment;
    implementation?: Implementation;
    display?: Display<string>;
}

/** a project with an id */
export type ProjectWithID = Project & {id: string}

/** A project that is displayed */
export type DisplayedProject<Name extends string> = ProjectWithID & {display: Display<Name>}

/** turns a domain into a sortable key */
function domainKey(domain: string | undefined): string | undefined {
    if (!domain) return domain;
    return domain.split(".").reverse().join(".")
}

/** ProjectDisplayKey returns a pair of (order, string) that should be used for sorting */
export function ProjectDisplayKey(project: Project): [number, string] {
    const order = project.display?.order ?? -1;
    const domain = domainKey(project.deployment?.domain) ?? project.name;
    return [order, domain];
}

/**
 * Implementation describes the implementation of the project
 */
type Implementation = undefined;

/**
 * Deployment describes the deployment of the project
 */
type Deployment = {
    domain: string; // url the deployment can be found at
    kind: DeploymentKind;
    provider: DeploymentProvider;
}

type DeploymentKind = "static" | "docker" | "dns";
type DeploymentProvider = "ghpages" | "hetzner" | "namecheap";

/** Display describes how an item is displayed on a page */
type Display<Name extends string> = {
    tag: Name; // tags to display this project under
    order?: number; // optional order within the current tab, lowest to highest 
    link?: string; // link to use, fallback to url
    tagline: string; // tagline to use
}

/** TagTabMeta provides meta information about a single tab */
export type TagTabMeta<Name extends string> = {
    id: Name;
    title: string;
}

/** TagTab describes a single tab */
export type TagTab<Name extends string> = {
    projects: Array<DisplayedProject<Name>>
} & TagTabMeta<Name>