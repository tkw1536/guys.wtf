import type { Project } from "../types"

const project: Project = {
    _version: 1,

    name: "akhttpd",
    description: "A daemon to serve ssh keys of every GitHub user",
    git: "https://github.com/tkw1536/akhttpd",
    implementation: {
        language: "go",
        features: {
            tests: true,
        },
    },
    deployment: {
        domain: "k.hw.is",
        kind: "docker",
        provider: "hetzner",
        tracking: true,
    },
    display: {
        tag: "technical",
        title: "k.hw.is",
        tagline: "<a href='https://github.com/tkw1536/akhttpd'>akhttpd</a>",
    },
}

export default project