import type { Project } from "../types"

const project: Project = {
    _version: 1,

    name: "viktorijapays4everythin.ga",
    description: "Viktorija pays for everything",
    git: "https://github.com/tkw1536/viktorijapays4everythin.ga",
    implementation: {
        language: "html",
        features: {
            darkmode: false,
        },
    },
    deployment: {
        domain: "viktorijapays4everythin.ga",
        kind: "static",
        provider: "ghpages",
        tracking: true,
    },
    display: {
        tag: "index",
        order: 20,
        tagline: "Viktorija pays for everything",
    },
}

export default project