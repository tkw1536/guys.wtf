import type { Project } from "../types"

const project: Project = {
    _version: 1,

    name: "covid.guys.wtf",
    description: "A website counting up since the pandemic began",
    git: "https://github.com/tkw1536/covid.guys.wtf",
    implementation: {
        language: "typescript",
        framework: "nextjs",
        features: {
            usingShared: false,
            darkmode: true,
            env: false,
        },
    },
    deployment: {
        domain: "covid.guys.wtf",
        kind: "static",
        provider: "ghpages",
        tracking: true,
    },
    display: {
        tag: "index",
        order: 0,
        tagline: "Pandemic",
    },
}

export default project