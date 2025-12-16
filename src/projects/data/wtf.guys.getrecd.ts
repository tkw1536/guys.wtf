import type { Project } from "../types"

const project: Project = {
    _version: 1,
    name: "getrecd.guys.wtf",
    description: "Hackathon Project to make Spotify Playlist based on a specific sentence",
    git: "https://github.com/sourabhlal/getRECd",
    implementation: {
        language: "python",
        framework: "bottle",
        features: {},
    },
    deployment: {
        domain: "getrecd.guys.wtf",
        kind: "docker",
        provider: "hetzner",
        tracking: false,
    },
    display: {
        tag: "index",
        order: 0,
        tagline: "Hackathon Project",
    },
}

export default project