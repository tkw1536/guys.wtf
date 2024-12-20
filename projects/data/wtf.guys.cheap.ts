import type { Project } from "../types"

const project: Project = {
    _version: 1,

    name: "cheap.guys.wtf",
    description: "Where can I find used electronics stuff in Germany?",
    git: "https://github.com/tkw1536/cheap.guys.wtf",
    implementation: {
        language: "html",
        features: {
            darkmode: false,
        },
    },
    deployment: {
        domain: "cheap.guys.wtf",
        kind: "static",
        provider: "ghpages",
        tracking: true,
    },
    display: {
        tag: "index",
        order: 0,
        tagline: "Where can I find used electronics stuff in Germany?",
    },
}

export default project