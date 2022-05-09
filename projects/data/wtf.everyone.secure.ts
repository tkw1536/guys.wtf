import type { Project } from "../types"

const project: Project = {
    _version: 1,
    name: "secure.everyone.wtf",
    description: "A website to generate random secure passwords",
    git: "https://github.com/tkw1536/secure.everyone.wtf",
    implementation: {
        language: "typescript",
        framework: "nextjs",
        features: {
            usingShared: false,
            env: false,
            darkmode: false,
        },
    },
    deployment: {
        domain: "secure.everyone.wtf",
        kind: "static",
        provider: "ghpages",
        tracking: true,
    },
    display: {
        tag: "technical",
        tagline: "Generate Passwords",
    },
}

export default project