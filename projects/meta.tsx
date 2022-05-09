import type { Project, ProjectWithID } from "./types"

/** turns a domain into a sortable key */
function domainKey(domain: string | undefined): string | undefined {
    if (!domain) return domain
    return domain.split(".").reverse().join(".")
}

/** ProjectDisplayKey returns a pair of (order, string) that should be used for sorting */
export function ProjectDisplayKey(project: Project): [number, string] {
    const order = project.display?.order ?? Number.MAX_SAFE_INTEGER
    const domain = domainKey(project.deployment?.domain) ?? domainKey(project.display?.title) ?? project.name
    return [order, domain]
}


export const Languages: Record<ProjectWithID["implementation"]["language"], { name?: string, href?: string }> = {
    none: {},
    go: { name: "Go", href: "https://go.dev/" },
    html: { name: "HTML" },
    python: { name: "Python" },
    typescript: { name: "Typescript", href: "https://www.typescriptlang.org/" },
}

export const Frameworks: Record<ProjectWithID["implementation"]["framework"], { name?: string, href?: string }> = {
    deployment: {},
    django: { name: "Django", href: "https://www.djangoproject.com/" },
    jekyll: { name: "Jekyll", href: "https://jekyllrb.com/" },
    bottle: { name: "Bottle", href: "https://bottlepy.org/" },
    nextjs: { name: "NextJS", href: "https://nextjs.org/" },
}

type keyofunion<T> = T extends T ? keyof T: never;

export const Features: Record<keyofunion<ProjectWithID["implementation"]["features"]>, { name: string, short: string; description: string}> = {
    darkmode: { short: "d", name: "darkMode", description: "providing dark mode" },
    env: { short: "e", name: "env", description: "using env file" },
    tests: { short:"t", name: "tests", description: "providing tests" },
    usingShared: { short: "sc", name: "usingShared", description: "using common components" },
}

export const Providers: Record<ProjectWithID["deployment"]["provider"], { name: string, short: string; href: string }> = {
    ghpages: { short: "ghpages", name: "GitHub Pages", href: "https://pages.github.com/" },
    hetzner: { short: "hetzner", name: "Hetzner", href: "https://hetzner.com/" },
    namecheap: { short: "namecheap", name: "Namecheap", href: "https://www.namecheap.com/" },
}

export const Kinds: Record<ProjectWithID["deployment"]["kind"], { name: string, href?: string }> = {
    dns: { name: "DNS" },
    docker: { name: "Docker", href: "https://www.docker.com/" },
    static:  { name: "static" },
}