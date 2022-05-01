import { Project } from "../types"

const project: Project = {
    _version: 1,

    "name": "black.everyone.wtf",
    "description": "Black Screen",
    "git": "https://github.com/tkw1536/black.everyone.wtf",
    "implementation": {
        language: "html",
        features: {
            darkmode: false,
        }
    },
    "deployment": {
        "domain": "black.everyone.wtf",
        "kind": "static",
        "provider": "ghpages"
    },
    "display": {
        "tag": "index",
        "order": 1,
        "tagline": "Black Screen"
    }
}

export default project