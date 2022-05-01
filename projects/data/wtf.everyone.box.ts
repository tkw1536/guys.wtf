import { Project } from "../types"

const project: Project = {
    _version: 1,

    "name": "DotsAndBoxes",
    "description": "Dots and Boxes from 2013",
    "git": "https://github.com/tkw1536/box.everyone.wtf",
    "implementation": {
        language: "html",
        framework: "none",
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