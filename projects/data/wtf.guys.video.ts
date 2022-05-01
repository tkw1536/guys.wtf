import { Project } from "../types"

const project: Project = {
    _version: 1,

    "name": "video.guys.wtf",
    "description": "Experiments with the Screen Capture API",
    "git": "https://github.com/tkw1536/video.guys.wtf",
    "implementation": {
        language: "html",
        features: {
            darkmode: false,
        }
    },
    "deployment": {
        "domain": "video.guys.wtf",
        "kind": "static",
        "provider": "ghpages",
        tracking: true,
    },
    "display": {
        "tag": "index",
        "order": 0,
        "tagline": "Screen Capture"
    }
}

export default project