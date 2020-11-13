//express routes => organizando rotas e chamando controllers
const express = require('express');
//criando rota
const routes = express.Router();
//importanto o controler da home e do login
const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')
const contatoController = require('./src/controllers/contatoController')



// rotas da home
routes.get('/', homeController.index)

//rotas de login
routes.get('/login/index', loginController.index);
routes.post('/login/signup', loginController.signup);
routes.post('/login/signin', loginController.signin);
routes.get('/login/logout', loginController.logout);

//rota de contatos
routes.get('/contato/index', contatoController.index);
routes.post('/contato/cadastro', contatoController.cadastro);
routes.post('/contato/edit/:id', contatoController.edit);
routes.get('/contato/index/:id', contatoController.editIndex);
routes.get('/contato/delete/:id', contatoController.delete);

//exportando todas rotas
module.exports = routes;
