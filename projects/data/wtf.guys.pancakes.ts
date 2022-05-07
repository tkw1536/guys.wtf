import { Project } from "../types"

const project: Project = {
    _version: 1,
    "name": "pancakes.guys.wtf",
    "description": "A website displaying a pancake recipe",
    "git": "https://github.com/tkw1536/pancakes.guys.wtf",
    "implementation": {
        "language": "typescript",
        "framework": "nextjs",
        "features": {
            "darkmode": true,
            "usingShared": false,
            "env": false,
        }
    },
    "deployment": {
        "domain": "pancakes.guys.wtf",
        "kind": "static",
        "provider": "ghpages",
        "tracking": true,
    },
    "display": {
        "tag": "index",
        "order": 0,
        "tagline": "reviewed as \"So thickk\""
    }
}

export default project