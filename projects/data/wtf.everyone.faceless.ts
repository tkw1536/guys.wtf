import type { Project } from "../types"

const project: Project = {
    _version: 1,

    name: "faceless.everyone.wtf",
    description: " listing all the faceless people in the yearbook",
    git: "https://github.com/tkw1536/faceless.everyone.wtf",
    implementation: {
        language: "html",
        framework: "jekyll",
        features: {},
    },
    deployment: {
        domain: "faceless.everyone.wtf",
        kind: "static",
        provider: "ghpages",
        tracking: true,
    },
    display: {
        tag: "index",
        order: 1,
        tagline: "In Memory Of The Faceless",
    },
}

export default project