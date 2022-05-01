import { Project } from "../types"

const project: Project = {
    _version: 1,

    "name": "DotsAndBoxes",
    "description": "Dots and Boxes from 2013",
    "git": "https://github.com/tkw1536/DotsAndBoxes",
    "implementation": {
        language: "html",
        features: {
            darkmode: false,
        }
    },
    "deployment": {
        "domain": "box.everyone.wtf",
        "kind": "static",
        "provider": "ghpages"
    },
    "display": {
        "tag": "index",
        "order": 1,
        "title": "box.everyone.wtf",
        "tagline": "Dots and Boxes from 2013"
    }
}

export default project