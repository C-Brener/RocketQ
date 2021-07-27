
const express = require('express')
const QuestionController = require('./controllers/QuestionController')

const route = express.Router()

route.get('/', (req, res) => res.render("index"))

route.get('/room', (req, res) => res.render("room"))

route.get('/create-pass', (req, res) => res.render("create-pass"))

//Formato que o formulario da modal tem que passar informação
route.post('/room/:room/:question/:action/', QuestionController.index)

//O req sempre retornara um objeto, dito isso o mesmo precisa estar dentro de chaves
// O sinal de : seguido de um nome define que a rota sera variavel de acordo com seu uso.

module.exports = route 