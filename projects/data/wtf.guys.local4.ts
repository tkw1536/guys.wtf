import { Project } from "../types"

const project: Project = {
    "name": "local4.guys.wtf",
    "description": "Same as <code>local.guys.wtf</code>, but IPv4 (<code>A</code> record) only. ",
    "git": "https://github.com/tkw1536/local4.guys.wtf",
    "deployment": {
        "domain": "local4.guys.wtf",
        "kind": "static",
        "provider": "ghpages"
    },
    "display": {
        "tag": "technical",
        "order": 5,
        "tagline": "Same as <code>local.guys.wtf</code>, but IPv4 (<code>A</code> record) only. "
    }
}

export default project