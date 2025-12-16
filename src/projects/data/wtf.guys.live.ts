import type { Project } from "../types"

const project: Project = {
    _version: 1,
    name: "proxyssh",
    description: "Easily run multiple commands via an ssh proxy",
    git: "https://github.com/tkw1536/proxyssh",
    implementation: {
        language: "go",
        features: {
            tests: true,
        },
    },
    deployment: {
        domain: "live.guys.wtf",
        kind: "docker",
        provider: "hetzner",
        tracking: false,
    },
    display: {
        tag: "technical",
        title: "live.guys.wtf",
        tagline: "Live Demo",
    },
}

export default project