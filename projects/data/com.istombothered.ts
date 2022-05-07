import { Project } from "../types"

const project: Project = {
    _version: 1,
    
    "name": "istombothered.com",
    "description": "A website showing all of Tom's complainaing tweets. Made without my consent. ",
    "author": {
        "name": "Leo Kuboschek",
        "link": "https://kuboschek.me/",
    },
    "implementation": {
        "language": "html",
        "features": {
            "darkmode": false,
        },
    },
    "deployment": {
        "domain": "istombothered.com",
        "kind": "static",
        "provider": "ghpages",
        "tracking": false,
    },
    "display": {
        "tag": "index",
        "order": 24,
        "tagline": "made without my consent"
    }
}

export default project