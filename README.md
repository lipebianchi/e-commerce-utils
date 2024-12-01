# 🛒 E-commerce Utils


## 🎯 Objetivo do Projeto

O projeto E-commerce Utils tem como objetivo fornecer ferramentas essenciais para e-commerces, incluindo um Gerador de QR-Codes e um Gerador de Senhas Seguras. A solução é modular, fácil de usar e personalizável, atendendo às necessidades de segurança e praticidade de lojas online.
Este projeto é um conjunto de utilitários para e-commerces, oferecendo funcionalidades como geração de QR-Codes e criação de senhas seguras. O sistema foi projetado para ser modular e extensível, com uma arquitetura organizada por serviços.

## 🚀 Funcionalidades
🔒 **Gerador de Senhas Seguras**
- **Configuração Personalizável**: Defina caracteres permitidos (maiúsculas, minúsculas, números e especiais) no arquivo `.env.`
- **Geração Dinâmica**: Crie senhas robustas com base em configurações específicas.
📲 Gerador de QR-Code
- **Modos de Geração**: Gere QR-Codes como imagem ou diretamente no terminal.
- **Personalização**: Insira links ou textos para serem convertidos em QR-Codes.


## 🏅 Tecnologias Utilizadas
- **Node.js**: Plataforma de desenvolvimento JavaScript do lado do servidor.
- **qrcode-terminal**: Biblioteca para criação de QR-Codes dentro do terminal.
- **chalk**: Estilização de prompt.
- **prompt**: Criação de prompts interativos.


## 💻 Pré-requisitos
Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

- `Node.js` (v14 ou superior).
- `npm` (gerenciador de pacotes do Node.js).
- package `prompt` do npmjs.
- qrcode-terminal.


## 🚀 Configurando o projeto:

1. Clone o repositório e entre na pasta:

``` bash
    git clone https://github.com/lipebianchi/e-commerce-utils.git
    cd E-commerce-Utils
```

2. Instalando as dependencias:

``` bash
    npm install
```

3. Configure o arquivo `.env`: Crie um arquivo `.env` na raiz do projeto e defina as opções de senha que deseja:


``` env
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
PASSWORD_LENGHT=25
```

4. Rode o projeto com o comando:

``` bash
    npm run start:dev
```
- **OU**

``` bash

    node src/index.js
```


5. Como manipular o arquivo env:

- UPPERCASE_LETTERS=true -> permite letras maiusculas na geração de senha 
- LOWERCASE_LETTERS=true -> permite letras minusculas na geração de senha
- NUMBERS=true -> permite numeros na geração de senha
- SPECIAL_CHARACTERS=true -> permite caracteres especiais na geração de senha
- PASSWORD_LENGHT=25 -> especifica quantos caracteres sua senha terá

Para configurar a senha que deseja, basta colocar "true" nas situações que você queira, e "false" nas que não queira.

## 📁 Estrutura do Projeto

``` graphql
e-commerce-utils/
│
├── src/
│   ├── prompts-schema/           # Estruturas dos prompts interativos
│   │   ├── main-schema.js        # Prompt inicial para seleção do método (QR-Code ou Senha)
│   │   └── qrcode-schema.js      # Prompt específico para configuração de QR-Codes
│   │
│   ├── services/                 # Serviços principais
│   │    ├── password/
│   │    │   ├── utils/
│   │    │   │   └── permitted-caracters.js   # Verificação dos caracteres permitidos
│   │    │   ├── create.js         # Função principal de criação de senhas
│   │    │   └── handler.js        # Função auxiliar para a criação de senhas
│   │    │
│   │    └── qr-code/
│   │        ├── create.js         # Função para criação de QR-Codes
│   │        └── handler.js        # Tratamento de erros e geração no terminal
│   │
│   ├── index.js                      # Ponto de entrada principal
│
├── package-lock.json             # Controle de versão das dependências
├── package.json                  # Configurações e dependências do projeto
├── .gitignore                    # Arquivos ignorados pelo Git
└── README.md                     # Documentação do projeto
```
