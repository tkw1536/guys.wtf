
/**
 * Project represents a single project
 */
export type Project = {
    _version: 1, // version of this project schema
 
    name: string; // name of the project
    description: string; // long form description of the project
    git?: string; // https:// url to github project
    author?: string; // author (if not me directly)

    implementation: Implementation;
    releases?: Releases;
    deployment?: Deployment;

    display?: Display<string>;
}

// TODO:
// 1: implementation + description
// 2: tracking
// 3: releases (future work, allow multiple)

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
    const order = project.display?.order ?? Number.MAX_SAFE_INTEGER;
    const domain = domainKey(project.deployment?.domain) ?? domainKey(project.display?.title) ?? project.name;
    return [order, domain];
}

/**
 * Implementation describes the implementation of the project
 */
type Implementation = (
    ImplementationDeployment |
    ImplementationStaticHTML | ImplementationJekyll |
    ImplementationNext |
    ImplementationGo | 
    ImplementationDjango | ImplementationBottle
) & {
    upstream?: string, // if set, this project is a fork of an upstream project
}

type ImplementationDeployment = {
    language: "none",
    framework: "deployment",
}

type ImplementationGo = {
    language: "go",
    features: {
        tests: boolean;
    }
}

type ImplementationStaticHTML = {
    language: "html",
    framework: "none",
    features: {
        darkmode: boolean; // does the implementation allow dark mode
    },
}

type _empty = Record<string, never>;

type ImplementationJekyll = {
    language: "html",
    framework: "jekyll",
    features: _empty,
}

type ImplementationNext = {
    language: "typescript",
    framework: "nextjs",
    features: {
        usingShared: boolean; // using main shared module code
        darkmode: boolean; // does the implementation allow dark mode
        env: boolean; // does implementation use environment-based configuration
    },
}

type ImplementationBottle = {
    language: "python",
    framework: "bottle",
    features: _empty,
}

type ImplementationDjango = {
    language: "python",
    framework: "django",
    features: _empty,
}


type Releases = {
    tags: boolean; // are tags used for releases

    docker?: {
        image: boolean; // what is the name of the image
        arch: string[]; // list of docker architectures
        auto: boolean; // is it automatically built for each commit
        tags: boolean; // are releases automatically made available as versioning tags
        
        features?: Partial<{
            limited_user: boolean; // is the docker image running as a limited user 
        }>
    }
}

/**
 * Deployment describes the deployment of the project
 */
type Deployment = {
    domain: string; // url the deployment can be found at
    tracking?: boolean; // is it tracked?
    kind: DeploymentKind;
    provider: DeploymentProvider;
}

type DeploymentKind = "static" | "docker" | "dns";
type DeploymentProvider = "ghpages" | "hetzner" | "namecheap";

/** Display describes how an item is displayed on a page */
type Display<Name extends string> = {
    tag: Name; // tags to display this project under
    title?: string; // title to display, falls back to project name
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