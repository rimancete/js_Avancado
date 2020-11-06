exports.middlewareGlobal = (req, res, next) =>{
    if (req.body.nome){
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