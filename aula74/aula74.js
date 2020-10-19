// Prototype => métodos que serão utilizadas posteriormente somente quando forem chamadas
/*
JavaScript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela
primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__)
que vem da propriedade prototype da função construtora que foi usada para criá-lo.
Quando tentamos acesar um membro de um objeto, primeiro o motor do JS
vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos
é usada até o topo (null) até encontrar (ou não) tal membro.

*/

function Pessoa (nome, sobrenome, idade){
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.idade = Number(idade)
};
//criando prototype para os métodos de 'Pessoa'
Pessoa.prototype.nomeCompleto = function () {return this.nome + ' ' + this.sobrenome;};
Pessoa.prototype.dtNascto = () => {
        const data = new Date();
        return data.getFullYear() - this.idade
}
Object.defineProperty(this, 'dtNascto',{
    enumerable: false,
    writable: false,
    configurable: false
});
const p1 = new Pessoa('Osvaldo', 'Costa', 33); // <-- Função construtora
const dataCompleta = new Date();
const horaAtual = `${dataCompleta.getHours()}:${dataCompleta.getMinutes()}:${dataCompleta.getSeconds()}`;
// <-- Date = Função construtora
console.log(p1);
console.log(dataCompleta);