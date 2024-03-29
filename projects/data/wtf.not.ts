import type { Project } from "../types"

const project: Project = {
    _version: 1,

    name: "not.wtf",
    description: "Take a walk instead",
    git: "https://github.com/tkw1536/not.wtf",
    implementation: {
        language: "html",
        features: {
            darkmode: true,
        },
    },
    deployment: {
        domain: "not.wtf",
        kind: "static",
        provider: "ghpages",
        tracking: true,
    },
    display: {
        tag: "index",
        order: 23,
        tagline: "Take a walk instead",
    },
}

export default project