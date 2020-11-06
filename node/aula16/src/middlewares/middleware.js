exports.middlewareGlobal = (req, res, next) =>{
    res.locals.bodyTitle = 'Curso Programação Javascript - Avançado';
    next();
}
exports.outroMiddleware = (req, res, next) =>{
    console.log('Sou seu outro middleware');
    next();
}