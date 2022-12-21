import type { Project } from "../types"

const project: Project = {
    _version: 1,
    name: "onatrain.guys.wtf",
    description: "Information About German Train Stations",
    git: "https://github.com/tkw1536/onatrain.guys.wtf",
    implementation: {
        language: "typescript",
        framework: "nextjs",
        features: {
            usingShared: false,
            env: false,
            darkmode: false,
        },
    },
    deployment: {
        domain: "onatrain.guys.wtf",
        kind: "static",
        provider: "ghpages",
        tracking: true,
    },
    display: {
        tag: "index",
        order: 0,
        tagline: "Train Stations",
    },
}

export default project