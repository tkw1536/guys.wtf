import type { Project } from "../types"

const project: Project = {
    _version: 1,

    name: "tkw01536.de",
    description: "Personal Website",
    git: "https://github.com/tkw1536/tkw01536.de",
    implementation: {
        language: "typescript",
        framework: "vite",
        features: {
            darkmode: true,
        },
    },
    deployment: {
        domain: "tkw01536.de",
        kind: "static",
        provider: "ghpages",
        tracking: true,
    },
}

export default project