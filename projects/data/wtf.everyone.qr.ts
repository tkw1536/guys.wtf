import { Project } from "../types"

const project: Project = {
    _version: 1,
    "name": "qr.everyone.wtf",
    "description": "A website to generate QR codes",
    "git": "https://github.com/tkw1536/qr.everyone.wtf",
    "implementation": {
        language: "typescript",
        framework: "nextjs",
        features: {
            usingShared: false,
            env: false,
            darkmode: false,
        }
    },
    "deployment": {
        "domain": "qr.everyone.wtf",
        "kind": "static",
        "provider": "ghpages"
    },
    "display": {
        "tag": "technical",
        "tagline": "Generate QR Codes"
    }
}

export default project