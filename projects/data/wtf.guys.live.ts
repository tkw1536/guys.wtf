import { Project } from "../types"

const project: Project = {
    "name": "live.guys.wtf",
    "description": "Live Demo",
    "git": "https://github.com/tkw1536/live.guys.wtf",
    "deployment": {
        "domain": "live.guys.wtf",
        "kind": "static",
        "provider": "ghpages"
    },
    "display": {
        "tag": "technical",
        "order": 12,
        "tagline": "Live Demo"
    }
}

export default project