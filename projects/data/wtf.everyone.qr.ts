import { Project } from "../types"

const project: Project = {
    "name": "qr.everyone.wtf",
    "description": "Generate QR Codes",
    "git": "https://github.com/tkw1536/qr.everyone.wtf",
    "deployment": {
        "domain": "qr.everyone.wtf",
        "kind": "static",
        "provider": "ghpages"
    },
    "display": {
        "tag": "technical",
        "order": 9,
        "tagline": "Generate QR Codes"
    }
}

export default project