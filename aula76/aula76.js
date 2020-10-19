// Herança
// Abstração => Coletivo de objetos. Ex: Coletivo de Smartphones é Produto
// Alguns smartphone pode ter sensor e outros não

//criando construtora Produto e seus métodos de desconto e valor com frete
function Smdefault (nome, preco){
    this.nome = nome,
    this.preco = preco
};
Smdefault.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco*(percentual/100));
};
Smdefault.prototype.valorComFrete = function (valorFrete) {
    this.preco += valorFrete;
};
//criando construtor de smartphone com sensor
function ComSensor (modelo, preco, sensor){
    Smdefault.call(this, modelo, preco);
    // seto uma chave privada para indexação futura dos smartphones com sensores
    Object.defineProperty(this, 'sensor',{
        configurable: false,
        enumerable: false,
        get: function (){return true}
    }),
    this.tipoSensor = sensor
};
// ajustando o prototype de 'Sm' para ter o proto de Produto
ComSensor.prototype = Object.create(Smdefault.prototype);
// ajustando o construtor do'ComSensor'
ComSensor.prototype.constructor = ComSensor;


const mi9 = new ComSensor('mi9', 2000, 'Proximidade');
const k90 = new Smdefault('k90', 1499.99);
console.log(mi9);
console.log(k90);