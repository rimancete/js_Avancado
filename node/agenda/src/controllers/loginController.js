//importando classe(dentro de models) que valida os dados
const Signup = require('../models/SignupModel')
exports.index = (req, res) => {
    if (req.session.user) return res.redirect('/');;
    return res.render('login');

};
exports.signup = async function (req, res) {
    try {
        //criando instância de 'Signup' enviando o body
        const signupDatas = new Signup(req.body)
        // chama método que chama a validação dos dados
        await signupDatas.register();

        //exibindo as mensagens de erro no formulário(view) caso exista
        if (signupDatas.errors.length > 0) {
            //salva o array de mensagens no flash messages com a tag 'errors'
            req.flash('errors', signupDatas.errors);
            //volta a página de cadastro e exibe os erros, salvando a sessão
            req.session.save(function () {
                return res.redirect('../login/index');
            });
            return;
        }
        req.flash('success', 'Usuário criado com sucesso');
        //volta a página de cadastro e exibe os erros, salvando a sessão
        req.session.save(function () {
            return res.redirect('../login/index');
        });
    } catch (e) {
        console.log(e);
        return res.render('404');
    }

};
exports.signin = async function (req, res) {
    try {
        //criando instância de 'Signup' enviando o body
        const signinDatas = new Signup(req.body)
        // chama método que chama a validação dos dados
        await signinDatas.signin();
        //exibindo as mensagens de erro no formulário(view) caso exista
        if (signinDatas.errors.length > 0) {
            //salva o array de mensagens no flash messages com a tag 'errors'
            req.flash('errors', signinDatas.errors);
            //volta a página de cadastro e exibe os erros, salvando a sessão
            req.session.save(function () {
                return res.redirect('/login/index');
            });
            return;
        }
        req.flash('success', 'Usuário logado');
        // salvar o usuário logado na sessão session
        req.session.user = signinDatas.user;
        //volta a página de cadastro e exibe os erros, salvando a sessão
        req.session.save(function () {
            return res.redirect('/');
        });
    } catch (e) {
        console.log(e);
        return res.render('../views/includes/404');
    }

};
exports.logout = function (req, res) {
    req.session.destroy();
    res.redirect('/login/index')
}