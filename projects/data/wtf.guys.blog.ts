import type { Project } from "../types"

const project: Project = {
    _version: 1,

    name: "blog.guys.wtf",
    description: "A blog started a long time ago that only ever got two posts",
    git: "https://github.com/tkw1536/blog.guys.wtf",
    implementation: {
        language: "go",
        features: {
            tests: false,
        },
    },
    deployment: {
        domain: "blog.guys.wtf",
        kind: "static",
        provider: "ghpages",
        tracking: false,
    },
    display: {
        tag: "index",
        order: 0,
        tagline: "Personal Blog - not updated in a while",
    },
}

export default project