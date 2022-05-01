import { Project } from "../types"

const project: Project = {
    _version: 1,
    
    "name": "istombothered.com",
    "description": "A website showing all my tweets",
    "author": "kuboschek",
    "implementation": {
        "language": "html",
        "framework": "none",
        "features": {
            "darkmode": false,
        },
    },
    "deployment": {
        "domain": "istombothered.com",
        "kind": "static",
        "provider": "ghpages",
    },
    "display": {
        "tag": "index",
        "order": 24,
        "tagline": "made without my consent"
    }
}

export default project