/* atribuição via desestruturação (Objetos)
*/
const pessoa = {
    nome: 'Osvaldo',
    sobrenome: 'Costa',
    idade: 33,
    endereco: {
        rua:'Av. Brasil',
        numero: 320
    }
};

const {nome: teste = '', sobrenome, idade, estCivil = 'Não informado', endereco: { rua: r, numero = 0}, endereco} = pessoa;
console.log(`Exibindo nome: ${teste} ${sobrenome}, ${idade} anos, estado cívil: ${estCivil}. Endereço: ${r}, ${numero}`);
console.log(endereco);

//utilizando operador rest
const {nome: primeiroNome, sobrenome: lastName, ...resto} = pessoa;
console.log(primeiroNome, lastName, resto);