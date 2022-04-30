import { Project } from "../types"

const project: Project = {
    "name": "secure.everyone.wtf",
    "description": "Generate Passwords",
    "git": "https://github.com/tkw1536/secure.everyone.wtf",
    "deployment": {
        "domain": "secure.everyone.wtf",
        "kind": "static",
        "provider": "ghpages"
    },
    "display": {
        "tag": "technical",
        "order": 10,
        "tagline": "Generate Passwords"
    }
}

export default project