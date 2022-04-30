import { Project } from "../types"

const project: Project = {
    "name": "lookup.everyone.wtf",
    "description": "DNS over HTTPS Lookup",
    "git": "https://github.com/tkw1536/lookup.everyone.wtf",
    "deployment": {
        "domain": "lookup.everyone.wtf",
        "kind": "static",
        "provider": "ghpages"
    },
    "display": {
        "tag": "technical",
        "order": 7,
        "tagline": "DNS over HTTPS Lookup"
    }
}

export default project