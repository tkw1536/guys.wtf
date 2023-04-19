import type { Project } from "../types"

const project: Project = {
    _version: 1,
    name: "4.my.guys.wtf",
    description: "Echoes back your public IPv4 address",
    git: "https://github.com/tkw1536/myguyswtf",
    implementation: {
        language: "go",
        features: {
            tests: false,
        },
    },
    deployment: {
        domain: "4.my.guys.wtf",
        kind: "docker",
        provider: "hetzner",
        tracking: false,
    },
    display: {
        tag: "technical",
        tagline: "Same as <code>my.guys.wtf</code>, but IPv4 only. ",
    },
}

export default project