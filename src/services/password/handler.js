import permittedCharacters from "./utils/permitted-caracters.js";

async function handler(){
    let characters = [];
    let password = "";
    const passwordLength = process.env.PASSWORD_LENGHT

    characters = await permittedCharacters()

    for(let i = 0; i < passwordLength; i++){
        const index = Math.floor(Math.random() * characters.length)
        password += characters[index]
    }

    return password
}

export default handler