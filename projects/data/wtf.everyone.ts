import { Project } from "../types"

const project: Project = {
    "name": "everyone.wtf",
    "description": "WAT",
    "git": "https://github.com/tkw1536/everyone.wtf",
    "deployment": {
        "domain": "everyone.wtf",
        "kind": "static",
        "provider": "ghpages"
    },
    "display": {
        "tag": "index",
        "order": 11,
        "tagline": "WAT"
    }
}

export default project