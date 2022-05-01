import { Project } from "../types"

const project: Project = {
    _version: 1,

    "name": "not.wtf",
    "description": "Take a walk instead",
    "git": "https://github.com/tkw1536/not.wtf",
    "implementation": {
        "language": "html",
        framework: "none",
        features: {
            darkmode: true,
        }
    },
    "deployment": {
        "domain": "not.wtf",
        "kind": "static",
        "provider": "ghpages"
    },
    "display": {
        "tag": "index",
        "order": 23,
        "tagline": "Take a walk instead"
    }
}

export default project