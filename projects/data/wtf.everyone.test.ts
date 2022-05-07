import { Project } from "../types"

const project: Project = {
    _version: 1,
    "name": "test.everyone.wtf",
    "description": "A simple static website showing some test",
    "git": "https://github.com/tkw1536/test.everyone.wtf",
    "implementation": {
        "language": "html",
        "features": {
            "darkmode": false,
        }
    },
    "deployment": {
        "domain": "test.everyone.wtf",
        "kind": "static",
        "provider": "ghpages",
        "tracking": true,
    },
    "display": {
        "tag": "index",
        "order": 1,
        "tagline": "#tooManyTests"
    }
}

export default project