
const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render("index", {page:'enter-room'}))

route.get('/create-pass', (req, res) => res.render("index", {page:'create-pass'}))

route.get('/room/:room', (req, res) => res.render("room"))


//Formato que o formulario da modal tem que passar informação
route.post('/question/:room/:question/:action/', QuestionController.index)

route.post('/create-room', RoomController.create)


//O req sempre retornara um objeto, dito isso o mesmo precisa estar dentro de chaves
// O sinal de : seguido de um nome define que a rota sera variavel de acordo com seu uso.

module.exports = route 