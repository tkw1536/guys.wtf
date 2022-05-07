import { Project } from "../types"

const project: Project = {
    _version: 1,

    "name": "guys.wtf",
    "description": "A collection of all my projects and their meta-properties",
    "git": "https://github.com/tkw1536/guys.wtf",
    "implementation": {
        "language": "typescript",
        "framework": "nextjs",
        "features": {
            "usingShared": false,
            darkmode: true,
            env: true,
        },
    },
    "deployment": {
        "domain": "guys.wtf",
        "kind": "static",
        "provider": "ghpages",
        "tracking": true,
    },
    "display": {
        "tag": "index",
        "order": 0,
        "tagline": ""
    }
}

export default project