import { Project } from "../types"

const project: Project = {
    _version: 1,

    "name": "base64.everyone.wtf",
    "description": "A website to convert files to base64",
    "git": "https://github.com/tkw1536/base64.everyone.wtf",
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
        "domain": "base64.everyone.wtf",
        "kind": "static",
        "provider": "ghpages",
        "tracking": true,
    },
    "display": {
        "tag": "technical",
        "tagline": "Convert Files to Base64"
    }
}

export default project