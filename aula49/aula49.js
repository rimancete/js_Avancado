// funções - declaração literal(function hoisting[a engine js eleva as declarações de funções e variáveis para o topo do script])
// Arrow function( não é hoisting)
const dividirDados = () => console.log('--------------');
function falaOi (){
    console.log('oi');
}
falaOi();
// first-class objects (Objeto de primeira classe) => Criar função como dado [function expression] => Pode-se chamar função dentro de função
const saudacao = function(nome) {
    dividirDados();
    console.log(`Bom Dia ${nome}`);
};
saudacao(nome());

function nome (){
    return 'Osvaldo';
}




//Dentro de um objeto
const obj = {
//saudar: saudacao(nome())
saudar(){saudacao(nome())}
};