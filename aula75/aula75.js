// manipulando prototype
//new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};
const objB = {
    chaveB: 'B'
    // __proto__: objA
};
const objC = new Object();
objC.chaveC = 'C';
//setando os proto de objB com o proto de objA
//setando os proto de objC com o proto de objB
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objB.chaveA);

//manipulando proto de funções construtoras

//criando constructor function
function Produto (nome, preco){
    this.nome = nome,
    this.preco = preco
}
// criando os métodos de 'desconto' e 'valorComFrete'
Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco*(percentual/100));
};
Produto.prototype.valorComFrete = function (valorFrete) {
    this.preco = this.preco + valorFrete;
};
//criando dois produtos
const mi9 = new Produto('Mi9 SE', 2000);
const k90 = {
    nome: 'LG K90',
    preco: 1490
}
//atrelando os métodos da constructor funtion no novo produto
Object.setPrototypeOf(k90, Produto.prototype);
// usando os métodos
k90.desconto(5);
console.log(k90);

//criando objeto e setando prototype 'juntos'
// atrela o proto da construtora no objeto novo e configura chaves existentes ou novas
const zenPlus = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: 1149.4
    },
    peso: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: 'Fornecedor ZYX'
    },
});
//criando e setando a chave com mesmo nome da construtora de msm nome no novo objeto
zenPlus.nome = 'ZenFone Plus';
console.log(zenPlus);