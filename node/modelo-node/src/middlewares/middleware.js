exports.middlewareGlobal = (req, res, next) =>{
    res.locals.bodyTitle = 'Curso Programação Javascript - Avançado';
    next();
}
exports.outroMiddleware = (req, res, next) =>{
    console.log('Sou seu outro middleware');
    next();
}
// *** NEW verificando token csrf
exports.checkCSRF = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN'){
        return res.render('../views/includes/404');
    }
}
// *** NEW enviando token a todas a rotas
exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}