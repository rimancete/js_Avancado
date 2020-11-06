exports.middlewareGlobal = (req, res, next) =>{
    if (req.body.nome){
        req.body.nome = req.body.nome.replace('Osvaldo', 'NOME INVALIDO');
        console.log();
        console.log(`Vi que seu nome é ${req.body.nome}`);
        console.log();
    };
    next();
}
exports.outroMiddleware = (req, res, next) =>{
    console.log('Sou seu outro middleware');
    next();
}