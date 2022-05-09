import type { Project } from "../types"

const project: Project = {
    _version: 1,
    name: "googlechat.everyone.wtf",
    description: "A list of all of Google's Chat Applications",
    git: "https://github.com/tkw1536/googlechat.everyone.wtf",
    implementation: {
        language: "html",
        framework: "jekyll",
        features: {},
    },
    deployment: {
        domain: "googlechat.everyone.wtf",
        kind: "static",
        provider: "ghpages",
        tracking: true,
    },
    display: {
        tag: "index",
        order: 1,
        tagline: "A list of all of Google's Chat Applications",
    },
}

export default project