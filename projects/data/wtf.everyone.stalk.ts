import type { Project } from "../types"

const project: Project = {
    _version: 1,
    name: "People",
    description: "A frontend for a search engine for people at Jacobs University Bremen",
    git: "https://github.com/OpenJUB/People",
    implementation: {
        language: "html",
        features: {
            darkmode: false,
        },
    },
    deployment: {
        domain: "stalk.everyone.wtf",
        kind: "static",
        provider: "ghpages",
        tracking: false,
    },
    display: {
        tag: "legacy",
        title: "stalk.everyone.wtf",
        order: 1,
        tagline: "Jacobs University People Search",
    },
}

export default project