// funções que alteram propriedades de chaves do objeto
// object.defineProperty() object.defineProperties()

// function Produto (nome, preco, estoque){
//     Object.defineProperty(this,'estoque',{
//         enumerable: true, // exibe a chave ou não
//         value: estoque, // valor da chave
//         writable: true, // pode alterar ou não o valor da chave
//         configurable: true // chave configurável ou não
//     });

//     Object.defineProperties(this, {
//         nome:{
//             enumerable: true, // exibe a chave ou não
//             value: nome, // valor da chave
//             writable: true, // pode alterar ou não o valor da chave
//             configurable: true // chave configurável ou não
//         },
//         preco:{
//             enumerable: true, // exibe a chave ou não
//         value: preco, // valor da chave
//         writable: true, // pode alterar ou não o valor da chave
//         configurable: true // chave configurável ou não
//         },
//     });
// };
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = nome;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // exibe a chave ou não
        value: estoque, // valor da chave
        writable: true, // alteração do valor da chave
        configurable: true // configurável ou não
    });
}
const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
for (let chave in p1){
    console.log(chave);
}