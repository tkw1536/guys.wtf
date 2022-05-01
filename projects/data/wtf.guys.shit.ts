import { Project } from "../types"

const project: Project = {
    _version: 1,
    "name": "shit.guys.wtf",
    "description": "A quick website that says that shit happens",
    "git": "https://github.com/tkw1536/shit.guys.wtf",
    "implementation": {
        "language": "html",
        "features": {
            darkmode: false,
        }
    },
    "deployment": {
        "domain": "shit.guys.wtf",
        "kind": "static",
        "provider": "ghpages"
    },
    "display": {
        "tag": "index",
        "order": 0,
        "tagline": "Shit happens"
    }
}

export default project