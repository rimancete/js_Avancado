exports.contatoForm = (req, res) =>{
    res.send(`
    <form action ="/contato" method ="POST">
    Nome completo: <input type="text" name="nome">
    Assunto: <input type="text" name="assunto">
    Mensagem: <input type="textarea" name="msg">
    <button>Envia</button>
    </form>
`);
    // respondendo(req) e logando os valores recebidos pelo método GET
    // 'params', partes que vem na rota da url
    console.log(req.params);
    // 'query' pega o valor na query string
    console.log(req.query.nome);
    console.log(req.query.assunto);
    console.log(req.query.msg); 

}
exports.contatoSubmit = (req, res) => {
    console.log(req.body)
    res.send(`Seu nome é ${req.body.nome}`);
}