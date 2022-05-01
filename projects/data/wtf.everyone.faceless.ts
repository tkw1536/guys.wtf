import { Project } from "../types"

const project: Project = {
    _version: 1,

    "name": "faceless.everyone.wtf",
    "description": "A website listing all the faceless people in the yearbook",
    "git": "https://github.com/tkw1536/faceless.everyone.wtf",
    "implementation": {
        language: "html",
        framework: "jekyll",
        features: {},
    },
    "deployment": {
        "domain": "faceless.everyone.wtf",
        "kind": "static",
        "provider": "ghpages"
    },
    "display": {
        "tag": "index",
        "order": 1,
        "tagline": "In Memory Of The Faceless"
    }
}

export default project