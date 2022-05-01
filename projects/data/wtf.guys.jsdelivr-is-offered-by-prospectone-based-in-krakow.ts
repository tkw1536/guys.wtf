import { Project } from "../types"

const project: Project = {
    _version: 1,
    "name": "jsdelivr-is-offered-by-prospectone-based-in-krakow.guys.wtf",
    "description": "A redirecting site for <code>cdn.jsdelivr.net</code> to inform people it is based in the EU",
    "git": "https://github.com/tkw1536/jsdelivr-is-offered-by-prospectone-based-in-krakow.guys.wtf",
    "implementation": {
        "language": "go",
        "features": {
            tests: false,
        }
    },
    "deployment": {
        "domain": "jsdelivr-is-offered-by-prospectone-based-in-krakow.guys.wtf",
        "kind": "docker",
        "provider": "hetzner",
    },
    "display": {
        "tag": "technical",
        "tagline": "It's in the EU people"
    }
}

export default project