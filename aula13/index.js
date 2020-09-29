/* \ escape do caracter seguinte seja exibido como string.
Ex: \\(exibe a barra invertida);
    \t(esconde a letra 't')
*/
let umaString = "Um texto";
console.log(`Concatenar umaString usando o método concat: ${umaString.concat(' em um lindo dia.')}`);
console.log(`concatenar umaString da forma padrão: ${umaString + ' em um lindo dia.'}`);
console.log(`${umaString} em um lindo dia.`);
/* pesquisar o indíce da string
indexOf['valor', {posição do índice}]
lasIndexOf['valor', {posição do índice}]
*/
console.log(`Retornar índice da letra 't', pesquisando à partir do índice 4: ${umaString.indexOf('t', 4)}`);
console.log(`Retornar índice da letra 'm', pesquisando do índice 3 para trás: ${umaString.lastIndexOf('m', 3)}`);

/*pesquisar por expressão regular
match(/[a-z]/g (retorna todas letras minúsculas))
search(/[a-z]/g (retorna o índice para o ítem pesquisado))
replace(pode-se usar expressão regular para localizar um elemento na string)


*/
console.log(`As letras minúsculas são: ${umaString.match(/[a-z]/g)}`);
console.log(`O índice de 'x' é: ${umaString.search(/x/)}`);
console.log(`Trocar 'Um' por 'Outro': ${umaString.replace(/Um/, 'Outro')}`);

umaString = 'O rato roeu a roupa do rei de roma.';
console.log(`Trocar todos os 'r' por '#': ${umaString.replace(/r/g, '#')}`);

console.log(`O tamanho da string é: ${umaString.length}`);
//slice pode usar valor negativo que pega o ultimo índice e subtrai pelo índice pesquisado
console.log(`"Localizando" a palavra "rato" da string à partir do índice: ${umaString.slice(2,6)}`)
//slice pode usar valor negativo que pega o ultimo índice existente e subtrai pelo índice pesquisado
console.log(`"Localizando" a palavra "roma" da string, voltando 5 índices do último: ${umaString.slice(-5,-1)}`)
console.log(`"Localizando" a palavra "roma" da string, usando substring: ${umaString.substring(umaString.length - 5, umaString.length - 1)}`)
console.log(`Colocar cada palavra em um array: ${umaString.split(' ')}`);
console.log(`Colocar as três primeiras palavras em um array: ${umaString.split(' ', 3)}`);
console.log(`Colocar todas as palavras em maiúsculo: ${umaString.toUpperCase()}`);
console.log(`Colocar todas as palavras em maiúsculo: ${umaString.toLowerCase()}`);