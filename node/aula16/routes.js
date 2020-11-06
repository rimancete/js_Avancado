//express routes => organizando rotas
const express = require('express');
//criando rota
const routes = express.Router();
//importanto o controler da home e do contato
const home = require('./src/controllers/home')
const contato = require('./src/controllers/contato')



// recebendo a requisição para a rota '/'
routes.get('/', home.homepage)
// adicionando o POST para envio do formulário
routes.get('/contato', contato.contatoSubmit);
routes.post('/contato', contato.contatoSubmit);
//exportando todas rotas
module.exports = routes;
