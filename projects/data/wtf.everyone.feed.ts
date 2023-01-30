import type { Project } from "../types"

const project: Project = {
    _version: 1,
    name: "FAULunch",
    description: "Servery Menu for FAU Erlangen-Nürnberg",
    git: "https://github.com/tkw1536/faulunch",
    implementation: {
        language: "go",
        features: {
            tests: false,
        },
    },
    deployment: {
        domain: "feed.everyone.wtf",
        kind: "docker",
        provider: "other",
        tracking: false,
    },
    display: {
        tag: "index",
        title: "feed.everyone.wtf",
        tagline: "Lookup the menu",
    },
}

export default project