import { Project } from "../types"

const project: Project = {
    "name": "stalk.everyone.wtf",
    "description": "Jacobs University People Search",
    "git": "https://github.com/tkw1536/stalk.everyone.wtf",
    "deployment": {
        "domain": "stalk.everyone.wtf",
        "kind": "static",
        "provider": "ghpages"
    },
    "display": {
        "tag": "legacy",
        "order": 1,
        "tagline": "Jacobs University People Search"
    }
}

export default project