import { Project } from "../types"

const project: Project = {
    _version: 1,

    "name": "flip.everyone.wtf",
    "description": "A website making random choices, like a coinflip",
    "git": "https://github.com/tkw1536/flip.everyone.wtf",
    "implementation": {
        language: "typescript",
        framework: "nextjs",
        features: {
            usingShared: false,
            env: false,
            darkmode: true,
        }
    },
    "deployment": {
        "domain": "flip.everyone.wtf",
        "kind": "static",
        "provider": "ghpages",
        "tracking": true,
    },
    "display": {
        "tag": "index",
        "order": 1,
        "tagline": "Flip (a coin for) everyone"
    }
}

export default project