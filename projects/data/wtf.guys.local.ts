import { Project } from "../types"

const project: Project = {
    _version: 1,
    "name": "local.guys.wtf",
    "description": "Domain pointing to <code>127.0.0.1</code> and <code>::1</code>. Subdomains <code>CNAME</code>ed. ",
    "implementation": {
        "language": "none",
        "framework": "deployment",
    },
    "deployment": {
        "domain": "local.guys.wtf",
        "kind": "dns",
        "provider": "ghpages"
    },
    "display": {
        "tag": "technical",
        "tagline": "DNS with an <code>A</code> record pointing to <code>127.0.0.1</code> and a <code>AAAA</code> record pointing to <code>::1</code>. Any subdomain is <code>CNAME</code>ed and works as well. "
    }
}

export default project