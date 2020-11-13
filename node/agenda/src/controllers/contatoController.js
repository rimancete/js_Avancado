//importando o ContatoModel
const Contato = require('../models/ContatoModel');
exports.index = (req, res) => {
    // enviando um contato fake apenas para criação do objeto vazio
    if (req.session.user) return res.render('contato', { contato: {} });
    return res.render('login');

};
/* NEW *** Como a criação do contato vem de uma função async,
ela retorna uma promise, portanto precisamos retorná-la como async await também
*/
exports.cadastro = async (req, res) => {
    try {
        const contato = new Contato(req.body, req.session.user.email);
        // chama método que valida e cadastra usuário
        await contato.cadastro();
        let idUser = null;
        //exibindo as mensagens de erro no formulário(view) caso exista
        if (contato.errors.length > 0) {
            //salva o array de mensagens no flash messages com a tag 'errors'
            req.flash('errors', contato.errors);
            //volta a página de cadastro e exibe os erros, salvando a sessão
            req.session.save(() => res.render('../views/contato',{body: req.body, errors: contato.errors}));
            return;
        }
        req.flash('success', 'Contato salvo com sucesso');
        //volta a página de cadastro e exibe os erros, salvando a sessão
        idUser = contato.contato._id;
        req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
        return idUser;
    } catch (e) {
        console.log(e);
        return res.render('../views/includes/404');
    }

};
exports.editIndex = async (req, res) => {
    try {
        //se usuário estiver logado
        if (req.session.user) {
            //se não existir o id do contato renderiza a página 404
            if (!req.params.id) res.render('../views/includes/404');
            // // localiza os dados do contato pelo id
            const contato = await Contato.buscaPorId(req.params.id);
            // se naõ existir o id do contato renderiza a página 404
            if (!contato) res.render('../views/includes/404');
            idUser = contato._id;
            req.session.contato = {
                _id: idUser || '',
                nome: contato.nome,
                sobrenome: contato.sobrenome,
                cel: contato.cel,
                email: contato.email,
                idUser: contato.idUser
        }

            return res.render('contato', { contato })

        }
        return res.render('login');
    } catch (e) {
        console.log(e);
        return res.render('../views/includes/404');
    }
}
exports.edit = async (req, res) => {
    try {
        if (req.session.user) {
            //se não existir o id do contato renderiza a página 404
            if (!req.params.id) res.render('../views/includes/404');
            //cria a instância com o body coletado no post
            const contato = new Contato(req.body, req.session.user.email);
            // chama o método 'edit' do model que atualizará os dados
            await contato.edit(req.params.id);
            idUser = req.params.id

            //exibindo as mensagens de erro no formulário(view) caso exista
            if (contato.errors.length > 0) {
                //salva o array de mensagens no flash messages com a tag 'errors'
                req.flash('errors', contato.errors);
                //volta a página de cadastro e exibe os erros, salvando a sessão
                req.session.contato = {
                    _id: idUser,
                    nome: contato.nome,
                    sobrenome: contato.sobrenome,
                    cel: contato.cel,
                    email: contato.email,
                    idUser: contato.idUser
                    }
    
                req.session.save(() => res.render('../views/contato',{body: req.session.contato, errors: contato.errors}));
                req.session.contato._id = idUser;
                return;
            }
            req.flash('success', 'Contato editado com sucesso');
            //volta a página de cadastro, salvando a sessão
            idUser = contato.contato._id;
            req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
            return;
        }
        return res.render('login');
    } catch (e) {
        console.log(e);
        return res.render('../views/includes/404');
    }
}
exports.delete = async function(req, res){
    try {
        //se usuário estiver logado
        if (req.session.user) {
            //se não existir o id do contato renderiza a página 404
            if (!req.params.id) res.render('../views/includes/404');
            // exlcua contato pelo id
            const contato = await Contato.delete(req.params.id);
            // se naõ existir o id do contato renderiza a página 404
            if (!contato) res.render('../views/includes/404');
        req.flash('success', 'Contato exluído com sucesso');
        //volta a página index, salvando a sessão
        req.session.save(() => res.redirect(`back`));
        return;
        }
        return res.render('login');
    } catch (e) {
        console.log(e);
        return res.render('../views/includes/404');
    }

}
