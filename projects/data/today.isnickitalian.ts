import { Project } from "../types"

const project: Project = {
    _version: 1,

    "name": "isnickitalian.today",
    "description": "A website to track Nick becoming Italian",
    "git": "https://github.com/kuboschek/isnickitalian.today",
    "implementation": {
        language: "html",
        features: {
            darkmode: false,
        }
    },
    "deployment": {
        "domain": "isnickitalian.today",
        "kind": "static",
        "provider": "ghpages"
    },
    "display": {
        "tag": "index",
        "order": 22,
        "tagline": "Spoilers"
    }
}

export default project