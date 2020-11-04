// criando servidor express (API)
//importando express
const express = require('express');
// executando o express
const app = express();
//querystrings
// parametros de url => /profiles/12345?campanha=googleads&nome_campanha=seila 
/*
/profiles/12345? => perfil
campanha=googleads& => query string
nome_campanha=seila => query string
 */

// recebendo a requisição para a rota '/' e respondendo a ela com uma mensagem na tela
app.get('/', (req, res) => {
    res.send('Hello <b>world!</b>');
});
//setando o express para tratar o POST requisitado
app.use(
    express.urlencoded(
        {extended: true}
    )
)
// recebendo a requisição POST para a rota '/contato/'
app.get('/contato/:nome?/:assunto?/:msg?', (req, res) => {
    res.send(`
        <form action ="/contato" method ="POST">
        Nome completo: <input type="text" name="nome">
        Assunto: <input type="text" name="assunto">
        Mensagem: <input type="textarea" name="msg">
        <button>Envia</button>
        </form>
    `);
    // respondendo(req) e logando os valores recebidos
    // 'params', partes que vem na rota da url
    console.log(req.params);
    // 'query' pega o valor na query string
    console.log(req.query.nome);
    console.log(req.query.assunto);
    console.log(req.query.msg);
});
// adicionando o POST para envio do formulário
app.post('/contato', (req, res) =>{
    console.log(req.body)
    res.send(`Seu nome é ${req.body.nome}`);
})
// configurando porta que escutará as requisições
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});