import type { Project } from "../types"

const project: Project = {
    _version: 1,

    name: "late.guys.wtf",
    description: "Will my DB train be late",
    git: "https://github.com/tkw1536/late.guys.wtf",
    implementation: {
        language: "html",
        features: {
            darkmode: false,
        },
    },
    deployment: {
        domain: "late.guys.wtf",
        kind: "static",
        provider: "ghpages",
        tracking: true,
    },
    display: {
        tag: "index",
        order: 0,
        tagline: "Will my DB train be late?",
    },
}

export default project