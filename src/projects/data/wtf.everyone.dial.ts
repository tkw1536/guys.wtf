import type { Project } from "../types"

const project: Project = {
    _version: 1,

    name: "DialYourTweet",
    description: "A hackathon project that allows you to tweet using a rotary phone",
    git: "https://github.com/tkw1536/DialYourTweet",
    implementation: {
        language: "html",
        features: {
            darkmode: false,
        },
    },
    deployment: {
        domain: "dial.everyone.wtf",
        kind: "static",
        provider: "ghpages",
        tracking: true,
    },
    display: {
        tag: "index",
        title: "dial.everyone.wtf",
        order: 1,
        tagline: "#DialYourTweet",
    },
}

export default project