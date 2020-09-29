//Funções
function soma(x = 0, y = 0){
    return x+y
}
// definindo valor padrão de parâmetro em caso de não envio do parâmetro
console.log('-------------------------------------------------')
console.log(`A soma de 2 é: ${soma(2)}`);
console.log(`A soma de 2 e 4 é: ${soma(2, 4)}`);


// função anonima
const raiz = function (n){
    return n ** 0.5;
};
console.log('-------------------------------------------------')
console.log(`A raíz quadrada de 9 é ${raiz(9)}`);
console.log(`A raíz quadrada de 4 é ${raiz(4)}`);

//criando função com 'arrow function'
const potencia = (x, y=0) => {
    return x**y
};
console.log('-------------------------------------------------')
console.log(`4 elevado a [padrão] é ${potencia(4)}`);
console.log(`2 elevado a 10 é ${potencia(2, 10)}`);
console.log(`0 elevado a 10 é ${potencia(0, 10)}`);

// criando 'arrow function' com uma instrução
const exibeUpperCase = n => n.toUpperCase();
console.log('-------------------------------------------------')
console.log(`O maiusculo de 'osvaldo' é ${exibeUpperCase('osvaldo')}`);

//