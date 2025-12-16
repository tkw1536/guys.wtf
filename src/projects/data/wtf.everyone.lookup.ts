import type { Project } from "../types"

const project: Project = {
    _version: 1,

    name: "lookup.everyone.wtf",
    description: "A DNS over HTTPS lookup website",
    git: "https://github.com/tkw1536/lookup.everyone.wtf",
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
        domain: "lookup.everyone.wtf",
        kind: "static",
        provider: "ghpages",
        tracking: true,
    },
    display: {
        tag: "technical",
        tagline: "DNS over HTTPS Lookup",
    },
}

export default project