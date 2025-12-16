import type { Project } from "../types"

const project: Project = {
    _version: 1,

    name: "coffee.guys.wtf",
    description: "A website returning HTTP 318 I'm a teapot",
    git: "https://github.com/tkw1536/coffee.guys.wtf",
    implementation: {
        language: "go",
        features: {
            tests: false,
        },
    },
    deployment: {
        domain: "coffee.guys.wtf",
        kind: "docker",
        provider: "hetzner",
        tracking: true,
    },
    display: {
        tag: "index",
        order: 0,
        tagline: "☕",
    },
}

export default project