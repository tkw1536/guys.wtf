import { Project } from "../types"

const project: Project = {
    _version: 1,

    "name": "local4.guys.wtf",
    "description": "Domain and all subdomains pointing to <code>127.0.0.1</code>",
    "implementation": {
        "language": "none",
        "framework": "deployment",
    },
    "deployment": {
        "domain": "local4.guys.wtf",
        "kind": "dns",
        "provider": "namecheap",
        "tracking": false,
    },
    "display": {
        "tag": "technical",
    "tagline": "Same as <code>local.guys.wtf</code>, but IPv4 (<code>A</code> record) only. "
    }
}

export default project