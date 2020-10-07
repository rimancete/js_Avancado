// parâmetros de função
// função definida com a palavra 'function' tem 'arguments' que são quaisquer parâmetros enviados à ela
function somar (a = 0, b = 0, c = 0){
    let soma = 0;
    for (let i of arguments){
        // se o argumento for vazio, atribui 0
        i = i || 0;
        // soma ele mesmo ao argumento
        soma += i;
    }
    console.log(`A soma é: ${soma}`);
    console.log(`a recebeu ${a}`);
    console.log(`b recebeu ${b}`);
    console.log(`c recebeu ${c}`);
    console.log(`----------------------------`);
}
somar(undefined,10,undefined,30);

function estCivil (desc = 'Não informado'){
    console.log(`O estado civíl informado é ${desc}`);
    console.log(`----------------------------`);
}
estCivil();

//atribuição via desestruturação em função com objetos
function cadastroPessoa ({nome = 'Não informado', sobrenome = 'Não informado', idade = 'Não informado'}){
    console.log(`Nome: ${nome}`);
    console.log(`Sobrenome: ${sobrenome}`);
    console.log(`Idade: ${idade}`);
    console.log(`----------------------------`);
}
const pessoa = {
    nome: 'Osvaldo',
    sobrenome: 'Costa',
}
cadastroPessoa(pessoa);

//atribuição via desestruturação em função com arrays
function escritorio ([obj1 = 'Não informado', obj2='Não informado', obj3='Não informado', obj4='Não informado', obj5='Não informado']){
    console.log(`O objeto 1 é: ${obj1}`);
    console.log(`O objeto 1 é: ${obj2}`);
    console.log(`O objeto 1 é: ${obj3}`);
    console.log(`O objeto 1 é: ${obj4}`);
    console.log(`O objeto 1 é: ${obj5}`);
    console.log(`----------------------------`);
}
const escritorioObjetos = ['notebook', "litro d'água",'fone'];
escritorio(escritorioObjetos);
// com arguments rest operator e function expression(pode-se usar arguments mas recomendado usar rest)
const calculo = function (operador = '+', acumulador, ...numeros){
    if (acumulador === 0) acumulador =1;
    for (let numero of numeros){
        switch (operador){
            case '+':
                acumulador += numero;
                break;
            case '-':
                acumulador -= numero;
                break;
            case '*':
                acumulador *= numero;
                break;
            case '/':
                acumulador /= numero;
        }
        
    }
    console.log(acumulador);
    

};
calculo('+', 0, 15, 10, 5);