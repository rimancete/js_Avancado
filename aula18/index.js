//objeto
const pessoa1 = {
    nome: 'Osvaldo',
    sobrenome: 'Costa',
    idade: 33
};

console.log(pessoa1.nome);
//criando função que cria o objeto pessoa
function criarPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}
const pessoa = [
    criarPessoa('Osvaldo', 'Costa', 33),
    criarPessoa('José','Silva', 65),
    criarPessoa('João','Silveira',45)
];
console.log('--------------------------------------------');
console.log(`Exibe o array do objeto que cria os dados da pessoa:`);
console.log(pessoa);
console.log('--------------------------------------------');

// Criando ação em objeto
const pessoa2 = {
    nome: 'Raiane',
    sobrenome: 'Araújo',
    idade: 29,
    
    fala() {
        console.log(`Olá ${this.nome}`);
        console.log(`A sua idade atual é ${this.idade}`)
        console.log('--------------------------------------------');
    },
    fizAniversario(){
        this.idade++;
    }
};
pessoa2.fala();
pessoa2.fizAniversario();
pessoa2.fala();
