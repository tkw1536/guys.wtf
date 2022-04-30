import { Project } from "../types"

const project: Project = {
    "name": "flip.everyone.wtf",
    "description": "Flip (a coin for) everyone",
    "git": "https://github.com/tkw1536/flip.everyone.wtf",
    "deployment": {
        "domain": "flip.everyone.wtf",
        "kind": "static",
        "provider": "ghpages"
    },
    "display": {
        "tag": "index",
        "order": 14,
        "tagline": "Flip (a coin for) everyone"
    }
}

export default project