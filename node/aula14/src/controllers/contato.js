exports.contatoSubmit = (req, res) => {
    res.render('formContato');
    // *** NEW importando ContatoModel
    const ContatoModel = require('../models/Contato')
    // *** NEW criando os dados
    // ** NEW if existir dados nos campos, cria-os
    if (req.body.nome && req.body.assunto && req.body.nome){
        ContatoModel.create({
            nome: req.body.nome,
            assunto: req.body.assunto,
            msg: req.body.msg
        })
            .then(dados => console.log(dados))
            .catch(e => console.log(e));
            console.log(req.body)
    }
    
}