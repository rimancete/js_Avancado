// for of -> quando precisar somente do valor e não do índice - NÃO FUNIONA COM OBJETOS

const nomes = ['Osvaldo', 'Luiz', 'Raiane'];
for (let valor of nomes){
    console.log(valor);
}

console.log('-----------');
// for each ->
nomes.forEach(function (valor, indice, array){
    console.log(indice, valor, array);
})

/*
For clássico - Geralmente com iteráveis(array ou strings)
For in - Retorna o índice ou chave(string, array ou objetos)
For of - Retorna o valor em si(iteráveis, array ou strings)
*/