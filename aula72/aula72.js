// defineProperty -> Getter(obtem e retorna valor) e Setters(altera valor)
// retira propriedade value e writable
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    let etqPvd = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // exibe a chave ou não
        // value: estoque, // valor da chave
        // writable: true, // alteração do valor da chave
        configurable: true, // configurável ou não
        get: function (){
            return etqPvd
        },
        set: function(valor){
            if (typeof valor !== 'number'){
               throw new TypeError('Informar somente número');
            }
            etqPvd = valor;
        },
    });
}
const p1 = new Produto('Short', 39.90, 5);
console.log(p1);
p1.estoque = 10;
console.log(p1.estoque);
console.log('--------------------');
console.log('--------------------');
console.log('--------------------');
// getter e setter com constructor functions
function criaProduto (nome, preco, estoque){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace(' vermelho','');
            nome = valor;
        }
    };
};
const p2 = criaProduto('Meia', 8.99, 20);
p2.nome = 'boné vermelho';
console.log(p2.nome);