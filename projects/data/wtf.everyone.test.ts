import { Project } from "../types"

const project: Project = {
    "name": "test.everyone.wtf",
    "description": "#tooManyTests",
    "git": "https://github.com/tkw1536/test.everyone.wtf",
    "deployment": {
        "domain": "test.everyone.wtf",
        "kind": "static",
        "provider": "ghpages"
    },
    "display": {
        "tag": "index",
        "order": 18,
        "tagline": "#tooManyTests"
    }
}

export default project