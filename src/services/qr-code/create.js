import prompt from "prompt"
import QRcodeSchema from "../../prompts-schema/qrcode-schema.js"
import handler from "./handler.js"

async function createQRCODE(){
    prompt.get(QRcodeSchema, handler)
    prompt.start()
}

export default createQRCODE