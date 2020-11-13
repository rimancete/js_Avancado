//express routes => organizando rotas e chamando controllers
const express = require('express');
//criando rota
const routes = express.Router();
//importanto o controler da home e do contato
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')



// rotas da home
routes.get('/', homeController.homepage)
// rotas de contato
routes.get('/contato', contatoController.contatoSubmit);
routes.post('/contato', contatoController.contatoSubmit);
//exportando todas rotas
module.exports = routes;
