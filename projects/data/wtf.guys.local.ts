import { Project } from "../types"

const project: Project = {
    "name": "local.guys.wtf",
    "description": "DNS with an <code>A</code> record pointing to <code>127.0.0.1</code> and a <code>AAAA</code> record pointing to <code>::1</code>. Any subdomain is <code>CNAME</code>ed and works as well. ",
    "git": "https://github.com/tkw1536/local.guys.wtf",
    "deployment": {
        "domain": "local.guys.wtf",
        "kind": "static",
        "provider": "ghpages"
    },
    "display": {
        "tag": "technical",
        "order": 4,
        "tagline": "DNS with an <code>A</code> record pointing to <code>127.0.0.1</code> and a <code>AAAA</code> record pointing to <code>::1</code>. Any subdomain is <code>CNAME</code>ed and works as well. "
    }
}

export default project