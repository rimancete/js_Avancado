exports.middlewareGlobal = (req, res, next) =>{
    //salvando as msgs no locals.errors e locals.success das flash messages
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    // salvando a sessão atual
    res.locals.user = req.session.user;
    res.locals.contato = req.session.contato
    next();
}
// *** NEW verificando token csrf
exports.checkCSRF = (err, req, res, next) => {
    if (err){
        return res.render('../views/includes/404');
    }
    next();
}
// *** NEW enviando token a todas a rotas
exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}