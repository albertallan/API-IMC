const express = require('express')

const routes = express.Router()

const TodoController = require('./controllers/TodoControllers')

routes.get('/todo', TodoController.list)
routes.post('/todo',TodoController.create)
routes.put('/todo/:id', TodoController.update)
routes.delete('/todo/:id',TodoController.delete)

module.exports = routes