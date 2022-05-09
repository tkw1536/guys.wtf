import type { Project } from "../types"

const project: Project = {
    _version: 1,

    name: "u.guys.wtf",
    description: "Encode strings with unicode modifiers",
    git: "https://github.com/tkw1536/u.guys.wtf",
    implementation: {
        language: "typescript",
        framework: "nextjs",
        features: {
            usingShared: false,
            darkmode: false,
            env: false,
        },
    },
    deployment: {
        domain: "u.guys.wtf",
        kind: "static",
        provider: "ghpages",
        tracking: true,
    },
    display: {
        tag: "index",
        order: 0,
        tagline: "Unicode",
    },
}

export default project