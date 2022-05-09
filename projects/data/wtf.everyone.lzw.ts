import type { Project } from "../types"

const project: Project = {
    _version: 1,

    name: "lzw.everyone.wtf",
    description: "A website to compress strings via lzw",
    git: "https://github.com/tkw1536/lzw.everyone.wtf",
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
        domain: "lzw.everyone.wtf",
        kind: "static",
        provider: "ghpages",
        tracking: true,
    },
    display: {
        tag: "technical",
        tagline: "Compress Strings via LZW",
    },
}

export default project