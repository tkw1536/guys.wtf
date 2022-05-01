import { Project } from "../types"

const project: Project = {
    _version: 1,

    "name": "vibrate.guys.wtf",
    "description": "Vibrate a message as morse code",
    "git": "https://github.com/tkw1536/vibrate.guys.wtf",
    "implementation": {
        "language": "html",
        "features": {
            "darkmode": false,
        },
    },
    "deployment": {
        "domain": "vibrate.guys.wtf",
        "kind": "static",
        "provider": "ghpages",
        tracking: true,
    },
    "display": {
        "tag": "index",
        "order": 0,
        "tagline": "Morse Code",
    }
}

export default project