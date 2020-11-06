// criando servidor express (API)
//importando express
const express = require('express');
// executando o express
const app = express();
// importando routes
const routes = require('./routes')
//setando o express para tratar o POST requisitado
app.use(express.urlencoded({extended: true}))
// iniciando o routes
app.use(routes);

// configurando porta que escutará as requisições
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});