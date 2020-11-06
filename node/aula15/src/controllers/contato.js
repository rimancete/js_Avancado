exports.contatoSubmit = (req, res) => {
    res.render('formContato');
    //importando ContatoModel
    const ContatoModel = require('../models/Contato')
    //criando os dados
    //se existir dados nos campos, cria-os
    if (req.body.nome && req.body.assunto && req.body.nome){
        ContatoModel.create({
            nome: req.body.nome,
            assunto: req.body.assunto,
            msg: req.body.msg
        })
            .then(dados => {
                console.log(dados);
                // *** NEW utilizando e salvando cookies após salvamento dos dados
                req.session.userData = {user: dados.nome, isLogIn: true};
                console.log(req.session.userData);
                // *** NEW utilizando flash messages
                req.flash('info', 'Olá pessoa');
                req.flash('error', 'Deu erro');
                req.flash('warning', 'Ok mas cuidado');
                req.flash('success', 'Tudo certo!');
                console.log(req.flash('success'), req.flash('warning'));
            })
            .catch(e => console.log(e));
    }
    
}