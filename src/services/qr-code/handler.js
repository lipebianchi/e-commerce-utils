import chalk from "chalk"
import qr from "qrcode-terminal"

async function handler(err, result) {
    if(err) {
        console.log("error on app")
        return
    }

    const isSmall = result.type == 2
    qr.generate(result.link, {small: isSmall}, (qrcode) => {
        console.log(chalk.green("QR code gerado com sucesso:\n", qrcode))
    })
}

export default handler