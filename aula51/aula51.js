//retorno de funções (return)
// - Retorna valor / Termina a função
function soma(n1, n2){
    return n1 + n2;
}
console.log(soma(2,5));

// retornando objetos
function criaPessoa (nome, sobrenome){
    return {nome, sobrenome};
}
const pessoa1 = criaPessoa('José', 'Silva');
const pessoa2 = criaPessoa('Maria', 'araújo');
console.log(criaPessoa('Osvaldo','Costa'), pessoa1, pessoa2);
// aumentando complexidade => retornando resultado de função que executa uma função com parâmetro da primeira função 
console.log('---------------------------------------------');
function falaFrase (comeco){
    function falaResto (resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá')
console.log(olaMundo('mundo'));
console.log('---------------------------------------------');
// duplicar, triplicar, quadruplicar e assim por diante
function criaMultiplicador(multiplicador){
    
    return function (n){
        return n*multiplicador;
    };
}
//passo o multiplicador => closures
let duplica = criaMultiplicador(2);
let triplica = criaMultiplicador(3);
let quadruplica = criaMultiplicador(4);

//passo o multiplicador
console.log(`Duplica 3: ${duplica(3)}`);
console.log(`Duplica 3: ${triplica(3)}`);
console.log(`Duplica 3: ${quadruplica(3)}`);
