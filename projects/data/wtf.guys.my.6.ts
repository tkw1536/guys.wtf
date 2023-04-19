import type { Project } from "../types"

const project: Project = {
    _version: 1,
    name: "6.my.guys.wtf",
    description: "Echoes back your public IPv6 address",
    git: "https://github.com/tkw1536/myguyswtf",
    implementation: {
        language: "go",
        features: {
            tests: false,
        },
    },
    deployment: {
        domain: "6.my.guys.wtf",
        kind: "docker",
        provider: "hetzner",
        tracking: false,
    },
    display: {
        tag: "technical",
        tagline: "Same as <code>my.guys.wtf</code>, but IPv6 only. ",
    },
}

export default project