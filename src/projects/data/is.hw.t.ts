import type { Project } from "../types"

const project: Project = {
    _version: 1,

    name: "t.hw.is",
    description: "A game where you accumulate points by clicking",
    git: "https://github.com/tkw1536/stupidwaitinggame",
    implementation: {
        language: "python",
        framework: "django",
        features: {},
    },
    deployment: {
        domain: "t.hw.is",
        kind: "docker",
        provider: "hetzner",
        tracking: true,
    },
    display: {
        tag: "index",
        order: 21,
        title: "t.hw.is",
        tagline: "Great Treasure Awaits",
    },
}

export default project