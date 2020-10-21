// factory functions + prototypes
//Composição (mixing) => criando métodos desaclopados do objeto => serão inseridos no objeto que está vinculado a função fábrica
const falar = {
    falar() {
        console.log(`${this.nome} está falando`)
    },
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`)
    },
};

const beber ={
    beber() {
        console.log(`${this.nome} está bebendo`)
    }
};

//copiando os métodos criados como variável para o objeto que contem os métodos com spread operator
// const pessoaPrototype = {...falar, ...comer, ...beber}

// copiando com assign
const pessoaPrototype = Object.assign({},falar, comer, beber);



function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype,{
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
};

const p1 = criaPessoa('Osvaldo', 'Costa');
const p2 = criaPessoa('Raiane', 'Araújo');
p2.falar();
p1.comer();
p1.beber();