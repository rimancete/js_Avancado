// padrão IEEE 754-2008
let num1 = 150;
let num2 = 2.5;

//concatenar
console.log(`Concatenando: ${num1.toString() + num2}`);
console.log(`Tipo das variáveis: ${typeof num1}, ${typeof num2}`);

//alterando num1 para string
console.log(`Alterando num1 para string: ${typeof (num1 = num1.toString())}`);

//voltando num1 para number
console.log(`Alterando num1 para string: ${typeof (num1 = (Number(num1)))}`);

//exibir o binário de num1
console.log(`Binário de num1: ${num1.toString(2)}`);

// criando um float (num3) e arredondando seu valor
let num3 = 12.3446546457
console.log(`Defindindo um float para 2 casas decimais: ${num3.toFixed(2)}`);

//verificar o tipo do número(lógico > retorna boolean)
console.log(`Verificando se num3 é um número é inteiro ou não: ${Number.isInteger(num3)}`);

//calculando um NaN e o identificando (lógico > retorna boolean)
let conta = num3 * 'oi';
console.log(`Identificando o NaN de num3: ${Number.isNaN(conta)}`);
console.log('----------------------------------------------------------------')
/************************
 *  TRATANDO IMPRECISÃO * 
 * 
 */
let num4 = 0.7;
let num5 = 0.1;
console.log(`Resultado impreciso: ${num4 + num5}`);
//somando o 0.7 a 0.1
num4 += num5 // 0.8
num4 += num5 // 0.9
num4 += num5 // 1.0
console.log(`Agora num4 deveria ser 1.0: ${num4}... Ops, impreciso :O`);
console.log(`Arredondando com 'toFixed(2)': ${num4.toFixed(2)}. Agora, verificando se num4 é inteiro: ${Number.isInteger(num4)}`);
console.log(`Para resolver, convertemos o num4.toFixed(2) para número novamente`)
num4 = parseFloat(num4.toFixed(2));
console.log(`Portanto o número agora deve retornar inteiro: ${Number.isInteger(num4)}`)
//voltando num4 ao valor inicial
num4 = 0.7;

