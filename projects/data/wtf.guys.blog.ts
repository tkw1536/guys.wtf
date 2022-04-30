import { Project } from "../types"

const project: Project = {
    "name": "blog.guys.wtf",
    "description": "Defunct blog",
    "git": "https://github.com/tkw1536/blog.guys.wtf",
    "deployment": {
        "domain": "blog.guys.wtf",
        "kind": "static",
        "provider": "ghpages"
    },
    "display": {
        "tag": "legacy",
        "order": 0,
        "tagline": "Defunct blog"
    }
}

export default project