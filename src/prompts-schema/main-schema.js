import chalk from "chalk"

const mainSchema = [
    {
        name: "answer",
        description: chalk.yellow.bold("Escolha oque deseja utilizar: (1 - Gerar QRcode ) (2 - Gerar senha de alto padrão: )\n"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha um valor entre 1 e 2!"),
        required: true,
    }
]

export default mainSchema