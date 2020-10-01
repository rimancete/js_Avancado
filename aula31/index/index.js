//diferenças entre var e let
const verdadeira = true;
// let tem escopo de bloco {... bloco}
// var só tem escopo de função
let nome = 'Luiz'; //criando
var nome2 = 'Luiz'; //criando
if (verdadeira){
    let nome = 'Osvaldo' // criando
    var nome2 = 'Rogério' // redeclarando
    console.log(nome, nome2);

    if (verdadeira){
        var nome2 = 'Olavo'; // redeclarando
        let nome = 'outra coisa'
        console.log(nome);
    }
}
console.log(nome2);

// quando usamos var já declarando-a, depois de chamá-la em algum local, será apresentado que essa variável é 'undefined'
// com o let apresentará msg informando que a variável não existe(não acontece o 'roisting')