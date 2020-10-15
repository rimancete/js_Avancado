// revisão arrays
//valor por referência
// shift(remove começo) / unshift(adiciona começo) | pop(remove final) / push (adiciona final)

const nomes = ['osvaldo', 'raiane', 'pedro'];
nomes[2] = 'miguel';
//removendo elemento mantendo o índice
delete nomes[2];
console.log(nomes);
// criando array com construtor
const arcoIris = new Array('azul', 'vermelho', 'verde');
console.log(arcoIris);
// spread operator (espalhar valores de array em outro array)
const novoArcoIris = [...arcoIris];
// fatiando array
const cor = arcoIris.slice(1,2);
console.log(cor);
// convertendo string em array
const nomeCompleto = 'Osvaldo Domingos Costa Junior';
const nomeArr = nomeCompleto.split(' ');
console.log(nomeArr);
//convertendo array em string
const fullName = nomeArr.join(' ');
console.log(`O nomeArr novamente em string: ${fullName}`);