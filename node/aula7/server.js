// criando servidor express (API)
//importando express
const express = require('express');
// executando o express
const app = express();
//utilizando o express (get)
/*      CRIAR   LER     ATUALIZAR   APAGAR
CRUD -> CREATE  READ    UPDATE      DELETE
        POST    GET     PUT         DELETE
*/
//http://meusite.com/ <- GET -> Entregue a página /
//http://meusite.com/sobre <- GET -> Entregue a página /sobre
//http://meusite.com/contato <- GET -> Entregue a página /contato

// recebendo a requisição para a rota '/' e respondendo a ela
app.get('/', (req, res) => {
    res.send('Hello <b>world!</b>');
});
// recebendo a requisição para a rota '/contato' e respondendo a ela
app.get('/contato', (req, res) => {
    res.send(`
        <form action ="/contato" method ="POST">
        Nome do contato: <input type="text" name="nome">
        <button>Envia</button>
        </form>
    `);
});
// adicionando o POST para envio do formulário
app.post('/contato', (req, res) =>{
    res.send('Formulário recebido');
})
// configurando porta que escutará as requisições
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});