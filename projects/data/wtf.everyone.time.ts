import { Project } from "../types"

const project: Project = {
    _version: 1,
    "name": "time.everyone.wtf",
    "description": "A website comparing and showing multiple timezones",
    "git": "https://github.com/tkw1536/time.everyone.wtf",
    "implementation": {
        language: "typescript",
        framework: "nextjs",
        features: {
            usingShared: false,
            darkmode: false,
            env: false,
        },
    },
    "deployment": {
        "domain": "time.everyone.wtf",
        "kind": "static",
        "provider": "ghpages"
    },
    "display": {
        "tag": "index",
        "order": 1,
        "tagline": "Time"
    }
}

export default project