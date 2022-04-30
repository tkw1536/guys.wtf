import { Project } from "../types"

const project: Project = {
    "name": "video.guys.wtf",
    "description": "Screen Capture",
    "git": "https://github.com/tkw1536/video.guys.wtf",
    "deployment": {
        "domain": "video.guys.wtf",
        "kind": "static",
        "provider": "ghpages"
    },
    "display": {
        "tag": "index",
        "order": 10,
        "tagline": "Screen Capture"
    }
}

export default project