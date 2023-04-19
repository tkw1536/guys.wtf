import type { Project } from "../types"

const project: Project = {
    _version: 1,
    name: "my.guys.wtf",
    description: "Echoes back your public IP address",
    git: "https://github.com/tkw1536/myguyswtf",
    implementation: {
        language: "go",
        features: {
            tests: false,
        },
    },
    deployment: {
        domain: "my.guys.wtf",
        kind: "docker",
        provider: "hetzner",
        tracking: false,
    },
    display: {
        tag: "technical",
        tagline: "Echoes back your public IP address",
    },
}

export default project