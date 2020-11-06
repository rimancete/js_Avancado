// criando servidor express (API)
//importando express
const express = require('express');
// executando o express
const app = express();
// importando routes
const routes = require('./routes')
// **** NEW importando path
const path = require('path');

//setando o express para tratar o POST requisitado
app.use(express.urlencoded({extended: true}))
//importanto views => manipular os dados html com recursos de programação
//*** NEW importando conteúdo estático(bundle, css, imgs e etc...)
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'))
//instalar ejs => npm i ejs

//setando a engine das views
app.set('view engine', 'ejs');
// iniciando o routes
app.use(routes);

// configurando porta que escutará as requisições
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});