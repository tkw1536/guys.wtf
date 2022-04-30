import { Project } from "../types"

const project: Project = {
    "name": "base64.everyone.wtf",
    "description": "Convert Files to Base64",
    "git": "https://github.com/tkw1536/base64.everyone.wtf",
    "deployment": {
        "domain": "base64.everyone.wtf",
        "kind": "static",
        "provider": "ghpages"
    },
    "display": {
        "tag": "technical",
        "order": 1,
        "tagline": "Convert Files to Base64"
    }
}

export default project