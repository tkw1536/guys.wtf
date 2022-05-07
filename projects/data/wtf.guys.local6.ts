import { Project } from "../types"

const project: Project = {
    _version: 1,

    "name": "local6.guys.wtf",
    "description": "Domain and all subdomains pointing to <code>::1</code>",
    "implementation": {
        "language": "none",
        "framework": "deployment",
    },
    "deployment": {
        "domain": "local6.guys.wtf",
        "kind": "dns",
        "provider": "namecheap",
        "tracking": false,
    },
    "display": {
        "tag": "technical",
        "tagline": "Same as <code>local.guys.wtf</code>, but IPv6 (<code>AAAA</code> record) only. "
    }
}

export default project