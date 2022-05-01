import { Project } from "../types"

const project: Project = {
    _version: 1,

    "name": "blog.guys.wtf",
    "description": "A blog started a long time ago that only ever got two posts",
    "git": "https://github.com/tkw1536/blog.guys.wtf",
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
        "domain": "blog.guys.wtf",
        "kind": "static",
        "provider": "ghpages"
    },
    "display": {
        "tag": "legacy",
        "order": 0,
        "tagline": "Defunct blog"
    }
}

export default project