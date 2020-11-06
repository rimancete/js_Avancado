//express routes => organizando rotas
const express = require('express');
//criando rota
const routes = express.Router();
//importanto o controler da home e do contato
const home = require('./controllers/home')
const contato = require('./controllers/contato')

// recebendo a requisição para a rota '/' e respondendo a ela com uma mensagem na tela
routes.get('/', home.homepage);

// recebendo a requisição para a rota '/contato'
routes.get('/contato/:nome?/:assunto?/:msg?', contato.contatoForm);
// adicionando o POST para envio do formulário
routes.post('/contato', contato.contatoSubmit);
//exportando todas rotas
module.exports = routes;
