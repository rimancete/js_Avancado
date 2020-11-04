const nome = 'Osvaldo';
const sobrenome = 'Costa';
const idade = 33
const falaNome = () => nome + ' ' + sobrenome
//objeto do node para exportar
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falanome = falanome;

// criando de forma abreviada
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome
this.idade = idade
// console.log(module.exports);

// exportando coisa relevantes e mantendo interno o irrelevante para ser exportado
class Pessoa {
    constructor(nome){
        this.nome = nome
    }
}
exports.Pessoa = Pessoa;