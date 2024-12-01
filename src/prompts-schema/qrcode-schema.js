import chalk from "chalk";

const QRcodeSchema = [
    {
        name: "link",
        description: chalk.yellow.bold("Qual o link que deseja gerar o QRcode: \n"),
        required: true,
    },
    {
        name: "type",
        description: chalk.yellow.bold("Como deseja gerar o QRcode: (1 - imagem), (2 - terminal): \n"),
        pattern: /^[1-2]+$/,
        message: chalk.yellow.bold("Escolha um valor entre 1 e 2!"),
        required: true
    }
]

export default QRcodeSchema