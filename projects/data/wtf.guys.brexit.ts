import { Project } from "../types"

const project: Project = {
    "name": "brexit.guys.wtf",
    "description": "Countdown",
    "git": "https://github.com/tkw1536/brexit.guys.wtf",
    "deployment": {
        "domain": "brexit.guys.wtf",
        "kind": "static",
        "provider": "ghpages"
    },
    "display": {
        "tag": "index",
        "order": 1,
        "tagline": "Countdown"
    }
}

export default project