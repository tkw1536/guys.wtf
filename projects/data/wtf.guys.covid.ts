import { Project } from "../types"

const project: Project = {
    "name": "covid.guys.wtf",
    "description": "Pandemic",
    "git": "https://github.com/tkw1536/covid.guys.wtf",
    "deployment": {
        "domain": "covid.guys.wtf",
        "kind": "static",
        "provider": "ghpages"
    },
    "display": {
        "tag": "index",
        "order": 3,
        "tagline": "Pandemic"
    }
}

export default project