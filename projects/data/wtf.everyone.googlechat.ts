import { Project } from "../types"

const project: Project = {
    "name": "googlechat.everyone.wtf",
    "description": "A list of all of Google's Chat Applications",
    "git": "https://github.com/tkw1536/googlechat.everyone.wtf",
    "deployment": {
        "domain": "googlechat.everyone.wtf",
        "kind": "static",
        "provider": "ghpages"
    },
    "display": {
        "tag": "index",
        "order": 15,
        "tagline": "A list of all of Google's Chat Applications"
    }
}

export default project