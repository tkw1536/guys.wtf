import { Project } from "../types"

const project: Project = {
    _version: 1,
    "name": "http-tarpit",
    "description": "A http tarpit, that is a server that traps clients forever",
    "git": "https://github.com/tkw1536/http-tarpit",
    "implementation": {
        "language": "go",
        "upstream": "https://github.com/die-net/http-tarpit",
        "features": {
            tests: false,
        }
    },
    "deployment": {
        "domain": "trap.everyone.wtf",
        "kind": "docker",
        "provider": "hetzner",
        "tracking": false,
    },
    "display": {
        "tag": "technical",
        "title": "trap.everyone.wtf",
        "tagline": "<a href='https://github.com/tkw1536/http-tarpit'>HTTP Tarpit</a>"
    }
}

export default project