// revisão objetos
const pessoa = {
    nome: 'Osvaldo',
    sobrenome: 'Costa'
};
const chave = 'nome';
console.log(pessoa[chave]);
delete pessoa.sobrenome;
console.log(pessoa);
pessoa.sobrenome = 'Costa';
pessoa.idade = 33;
console.log(pessoa);
pessoa.fullName = function () {return (`${this.nome} ${this.sobrenome}`)};
pessoa.getDataNascimento = function () {
    const data = new Date();
    return data.getFullYear() - this.idade;
}
console.log(pessoa.fullName());
console.log(pessoa.getDataNascimento());
console.log('------------');
// lendo todas as chaves do objeto
for (let chave in pessoa){
    console.log(chave);
}
console.log('------------');
// lendo o valor de uma determinada chaves do objeto
for (let chave in pessoa){
    console.log(pessoa[chave]);
}
console.log('-------------');
// criando molde para cadastro de cliente
// factory functions / constructor functions / Classes

//factory function
function criaCliente (nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }

    };
}
const novoCliente = criaCliente('Osvaldo', 'Costa', 33);
console.log(novoCliente.nomeCompleto);
console.log('----------');
// constructor function

function Cliente (nome, sobrenome, idade) {
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.idade = idade
    // não permitindo alteração de valores na construção do objeto
    Object.freeze(this);
}
const cliente2 = new Cliente('Raiane', 'Costa', 30)
console.log(cliente2);

// não permitindo alteração de valores de objetos
//Object.freeze(cliente2);
cliente2.nome = 'Zé';
console.log(cliente2);
