import prompt from "prompt"
import mainSchema from "./prompts-schema/main-schema.js"
import createQRCODE from "./services/qr-code/create.js"
import createPassword from "./services/password/create.js"

(async function main() {
    prompt.get(mainSchema, async (err, choose) => {

        if (err) console.log("Não foi possível carregar sua escolha!")

        if(choose.answer == 1) await createQRCODE()
        if(choose.answer == 2) await createPassword()
    })
    prompt.start()      
}())