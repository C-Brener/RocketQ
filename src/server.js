// Iniciando o servidor node

const express = require('express') //Importando o modulo express
const route = require('./routes')
const path = require('path')

const server = express() // iniciando o express

server.set('view engine', 'ejs')

server.use(express.static("public")) //Dizendo ao express para usar de forma estatica o conteudo da pasta public

server.set('views', path.join(__dirname, 'views')) 
// O dirname serve para dizer o nome da pasta

server.use(route)

server.listen(3000, () => console.log("Rodando"))
// ()=> arrow function - É uma forma de abrir uma função de forma simplificada 