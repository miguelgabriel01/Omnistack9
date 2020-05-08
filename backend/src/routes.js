const express = require('express');
const SessionController = require('./controllers/SessionController')//importa o arquivo de controler

const routes = express.Router();

routes.post('/sessions', SessionController.store);

module.exports = routes;//exporta o arquivo de rotas