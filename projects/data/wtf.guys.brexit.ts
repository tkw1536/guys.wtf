import { Project } from "../types"

const project: Project = {
    _version: 1,

    "name": "brexit.guys.wtf",
    "description": "A website counting up/down from/to brexit",
    "git": "https://github.com/tkw1536/brexit.guys.wtf",
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
        "domain": "brexit.guys.wtf",
        "kind": "static",
        "provider": "ghpages"
    },
    "display": {
        "tag": "index",
        "order": 0,
        "tagline": "Countdown"
    }
}

export default project