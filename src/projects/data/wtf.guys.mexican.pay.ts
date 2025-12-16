import type { Project } from "../types"

const project: Project = {
    _version: 1,

    name: "pay.mexican.guys.wtf",
    description: "Who pays the mexican",
    git: "https://github.com/tkw1536/pay.mexican.guys.wtf",
    implementation: {
        language: "html",
        features: {
            usingShared: false,
            darkmode: true,
            env: false,
        },
    },
    deployment: {
        domain: "pay.mexican.guys.wtf",
        kind: "static",
        provider: "ghpages",
        tracking: false,
    },
    display: {
        tag: "legacy",
        order: 0,
        tagline: "Who pays the mexican?",
    },
}

export default project