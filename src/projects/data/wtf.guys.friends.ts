import type { Project } from "../types"

const project: Project = {
    _version: 1,

    name: "friends.guys.wtf",
    description: "Countdown to the next day for all your friends",
    git: "https://github.com/tkw1536/friends.guys.wtf",
    implementation: {
        language: "typescript",
        framework: "nextjs",
        features: {
            usingShared: false,
            darkmode: false,
            env: false,
        },
    },
    deployment: {
        domain: "friends.guys.wtf",
        kind: "static",
        provider: "ghpages",
        tracking: false,
    },
    display: {
        tag: "technical",
        tagline: "Countdown for all your friends",
    },
}

export default project