import { Project } from "../types"

const project: Project = {
    _version: 1,

    "name": "tus",
    "description": "A Django-based URL shortener",
    "git": "https://github.com/tkw1536/tus",
    "implementation": {
        "language": "python",
        "framework": "django",
        "features": {},
    },
    "deployment": {
        "domain": "hw.is",
        "kind": "docker",
        "provider": "hetzner",
        tracking: false,
    },
    "display": {
        "tag": "technical",
        "title": "hw.is",
        "tagline": "URL Shortener"
    }
}

export default project