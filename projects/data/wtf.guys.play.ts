import { Project } from "../types"

const project: Project = {
    _version: 1,

    "name": "play.guys.wtf",
    "description": "A website to display information about all your gamepads",
    "git": "https://github.com/tkw1536/play.guys.wtf",
    "implementation": {
        "language": "typescript",
        "framework": "nextjs",
        features: {
            usingShared: false,
            darkmode: false,
            env: false,
        },
    },
    "deployment": {
        "domain": "play.guys.wtf",
        "kind": "static",
        "provider": "ghpages",
        "tracking": true,
    },
    "display": {
        "tag": "technical",
        "tagline": "Test all your gamepads"
    }
}

export default project