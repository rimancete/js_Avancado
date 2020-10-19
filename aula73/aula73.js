// Métodos úteis para objetos

/*
Object.values => retorna valores das chaves do objeto (parecido com 'keys', porém values retorna somente os valores das chaves)
Object.entries => retorna valores das chaves e as chaves(similar 'keys' e ''values')
Object.assign(de, any) => copiar valores de objeto(simulador de 'spread operator')
Object.getOwnPropertyDescriptor(0,'prop') => exibe/obtem propriedades de uma chave
... (spread)

// Já vimos

Object.keys(retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produtos = {nome: 'Caneca', preco: 1.8};
// copiando apenas os valores de 'produtos' com spread operator
//  const outroProduto = {...produtos};

//copiando valores de objeto juntamente do spread operator
// const outroProduto = {
//     ...produtos,
//     material: 'porcelana'
// };
// outroProduto.nome = 'Lápis';
// console.log(produtos);
// console.log(outroProduto);

// copiando valores de 'produtos' com assign
// const outroProduto = Object.assign({},produtos, {material: 'porcelana'});
// console.log(produtos);
// console.log(outroProduto);

// copiando valores de determinada chaves de um objeto
// const outroProduto = {nome: produtos.nome, preco: produtos.preco};
// console.log(produtos);
// console.log(outroProduto);

// Exibindo/obtendo propriedades de uma chave de um objeto com getOwnPropertyDescriptor
// console.log(Object.getOwnPropertyDescriptor(produtos, 'nome'));

    // alterando propriedade de uma chave de um objeto com getOwnPropertyDescriptor
    // Object.defineProperty(produtos, 'nome',{
    //     writable: false,
    //     configurable: false
    // });
    // console.log(Object.getOwnPropertyDescriptor(produtos, 'nome'));

// retornando os valores das chaves com values
// console.log(Object.values(produtos));
// retornando chaves e valores com entries
console.log(Object.entries(produtos));
console.log('---------------');
// iterando sobre os valores do objeto
for (let [chave, valor] of Object.entries(produtos)){
    console.log(chave, valor);
}