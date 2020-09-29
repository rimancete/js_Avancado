let num1 = 9.3434324;
//baixando o num1 para o inteiro mais próximo
let num = Math.floor(num1);
console.log(`Baixa o num1 para o inteiro mais próximo: ${num}`);

//subindo o num1 para o inteiro mais próximo
num = Math.ceil(num1);
console.log(`Sobe o num1 para o inteiro mais próximo: ${num}`);

//retorna o num1 para o inteiro mais próximo
num = Math.round(num1);
console.log(`Trás o num1 para o inteiro mais próximo: ${num}`);

//retorna o maior número em uma sequencia
num = [10, 20, 5, -40, 200, 1000, -500];
console.log(`Trás o maior número na sequencia: ${Math.max(num[0], num[1], num[2], num[3], num[4], num[5])}`);

/***********************
 * gerar número aleatório
************************/
console.log(`Número aleatório entre 0 e 0.9: ${Math.random()}`);
//arredonda um random entre 10 e 5 em uma const
const aleatorio = Math.round(Math.random()* (10 - 5) + 5);
console.log(`${aleatorio}`);
console.log('--------------------------------------------------------------');

// PI, exponenciação
console.log(`Valor de PI: ${Math.PI}`);
console.log(`2 elevado a 5: ${Math.pow(2, 5)}`);

//pegar raiz quadrada de 9
num = 9
console.log(`Raiz quadrada de 9: ${num ** 0.5}`)

//dividião por zero retorna 'infinity' e é boolean 'true'
console.log(`100 / 0 é verdadeiro: ${!!(100/0)}`);