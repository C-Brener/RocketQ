
const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render("index", {page:'enter-room'}))

route.get('/create-pass', (req, res) => res.render("index", {page:'create-pass'}))

route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open) // passando a rota para fazer com que o id da sala seja dinamico
route.post('/enterroom', RoomController.enter)


route.post('/question/create/:room', QuestionController.create)
//Formato que o formulario da modal tem que passar informação
route.post('/question/:room/:question/:action/', QuestionController.index)



//O req sempre retornara um objeto, dito isso o mesmo precisa estar dentro de chaves
// O sinal de : seguido de um nome define que a rota sera variavel de acordo com seu uso.

module.exports = route 