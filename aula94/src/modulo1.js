const nome = 'Osvaldo';
const sobrenome = 'Costa'
const idade = 33
// declarando variável interna => só não exportar
//const cpf = '123.456.789-01'
function soma(x, y) { return x + y; };

// exportando variável 'nome' com outro nome
export { nome as nomeDefault };
export { sobrenome, idade, soma }


// exportando classe de outra maneira
export class Cliente {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
    anoNascimento() {
        const data = new Date();
        const anoAtual = data.getFullYear();
        return anoAtual - this.idade;
    }
}

// exportando arrow function anonima como default
export default (x, y) => x * y;
