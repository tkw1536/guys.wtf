import { Project } from "../types"

const project: Project = {
    _version: 1,
    "name": "jesus.guys.wtf",
    "description": "A website making use of the pun in the domain name",
    "git": "https://github.com/tkw1536/jesus.guys.wtf",
    "implementation": {
        "language": "html",
        "features": {
            darkmode: false,
        }
    },
    "deployment": {
        "domain": "jesus.guys.wtf",
        "kind": "static",
        "provider": "ghpages"
    },
    "display": {
        "tag": "index",
        "order": 0,
        "tagline": "Jesus"
    }
}

export default project