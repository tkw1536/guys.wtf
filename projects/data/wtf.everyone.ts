import { Project } from "../types"

const project: Project = {
    _version: 1,

    "name": "everyone.wtf",
    "description": "A website showing a wat image",
    "git": "https://github.com/tkw1536/everyone.wtf",
    "implementation": {
        language: "typescript",
        framework: "nextjs",
        features: {
            usingShared: false,
            env: false,
            darkmode: false,
        }
    },
    "deployment": {
        "domain": "everyone.wtf",
        "kind": "static",
        "provider": "ghpages",
        "tracking": true,
    },
    "display": {
        "tag": "index",
        "order": 1,
        "tagline": "WAT"
    }
}

export default project