// getter e setter em classes
// criar chave privada(protegida) dentro do objeto ou class
const _velocidade = Symbol('velocidade');
Symbol
class Carro {
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }
    // get => criar método para acessar a chave criada com Symbol de fora da classe
    get velocidade(){
        console.log('GETTER');
        return this[_velocidade];
    };
    // set => criar método para verificar a chave velocidade protegida
    set velocidade(valor){
        console.log('SETTER');
        // se o valor inputado não for número, encerra
        if (typeof valor !== 'number') return;
        // se o valor for fora da velocidade desejada, encerra
        if (valor > 100 || valor <= 0) return;
        this[_velocidade] = valor;
    };
    acelerar(){
        if (this[_velocidade] > 100) return;
        this[_velocidade]++;
    };
    freiar(){
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    };
};

const c1 = new Carro('Fusca');
// simulando botão pressionado indefinidamente
// for (let i =0; i<= 200; i++){
//     c1.acelerar();
// }
// um estágiario fez caquinha aqui
c1.velocidade = 100;
console.log(c1.velocidade);
console.log();


// Exemplo utilizano a classe Pessoa
class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    };
    get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    };
    set nomeCompleto(valor){
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    };
}
const p1 = new Pessoa('Osvaldo', 'Costa');
p1.nomeCompleto = 'Osvaldo Domingos Costa Junior';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);
