import type { Project } from "./types"

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
