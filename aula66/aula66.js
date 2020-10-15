// map altera valores do array

// dobre os números
//               0  1   2   3  4  5  ....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobraNumeros = numeros.map(numero => numero*2);
console.log(dobraNumeros);





// Para cada elemento
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave 'nome' do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];
// estamos alterando os valores tanto na nova variável qt na original por conta da atribuição por referência
const nomes = pessoas.map(obj => obj.nome)
console.log(nomes);

const idades = pessoas.map(obj => ({idade: obj.idade}));

console.log(idades);
const comIds = pessoas.map((obj, indice) => {
    // Para criar um novo array baseado no original, cria-se um novo objeto com rest operator
    const newObj = {...obj};
    newObj.id = indice+1;
    // retorna esse novo objeto
    return newObj;});
console.log(comIds);