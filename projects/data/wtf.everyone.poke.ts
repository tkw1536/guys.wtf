import type { Project } from "../types"

const project: Project = {
    _version: 1,
    name: "poke.everyone.wtf",
    description: "A combination of Pong and Snake. Winning Project for JacobsHack 2014. ",
    git: "https://github.com/tkw1536/Poke",
    implementation: {
        language: "javascript",
    },
    deployment: {
        domain: "poke.everyone.wtf",
        kind: "docker",
        provider: "hetzner",
        tracking: false,
    },
    display: {
        tag: "index",
        title: "poke.everyone.wtf",
        tagline: "A combination of Pong and Snake",
    },
}

export default project