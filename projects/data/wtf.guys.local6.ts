import { Project } from "../types"

const project: Project = {
    "name": "local6.guys.wtf",
    "description": "Same as <code>local.guys.wtf</code>, but IPv6 (<code>AAAA</code> record) only. ",
    "git": "https://github.com/tkw1536/local6.guys.wtf",
    "deployment": {
        "domain": "local6.guys.wtf",
        "kind": "static",
        "provider": "ghpages"
    },
    "display": {
        "tag": "technical",
        "order": 6,
        "tagline": "Same as <code>local.guys.wtf</code>, but IPv6 (<code>AAAA</code> record) only. "
    }
}

export default project