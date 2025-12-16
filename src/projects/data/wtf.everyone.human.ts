import type { Project } from "../types"

const project: Project = {
    _version: 1,

    name: "human.everyone.wtf",
    description: "Convert Bytes To Human Readable String",
    git: "https://github.com/tkw1536/human.everyone.wtf",
    implementation: {
        language: "html",
        features: {
            darkmode: true,
        },
    },
    deployment: {
        domain: "human.everyone.wtf",
        kind: "static",
        provider: "ghpages",
        tracking: true,
    },
    display: {
        tag: "technical",
        tagline: "from a number of bytes",
    },
}

export default project