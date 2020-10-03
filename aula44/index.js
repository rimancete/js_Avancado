//Tratando e lançando erros (try, catch, throw)


// try{
//     console.log(naoExisto);
// } catch(e) {
//     console.log('nãoExisto não existe');
// }

function soma (x,y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new ReferenceError('x e y precisam ser números');
    }
    return x + y;
}
try {
    console.log(soma(1,2));
    console.log(soma('1',2));
}
catch(e){
    console.log('Alguma coisa amigável para o usuário');
}