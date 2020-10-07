// funções fábrica - factory functions
function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        fala(assunto = 'falando NADA.'){
            return `${this.nome} está falando ${assunto}.`;
        },
        altura,
        peso,
        //get(getter) obtem dados e disfarça o método a ser um atributo
        get imc(){
            return (this.peso / (this.altura**2)).toFixed(2);
        },
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        //set(setter) altera dados por parametro
        //separando o nome do sobrenome
        set nomeCompleto(vetorNome){
            //divide a string por espaço
            vetorNome = vetorNome.split(' ');
            // retorna o primeiro valor do vetor e limpa o restante
            this.nome = vetorNome.shift();
            // coletando o restante da string e armazenando em sobrenome
            this.sobrenome = vetorNome.join(' ');
        }
    };
};
const p1 = criaPessoa('Osvaldo', 'Costa', 1.80, 85);
const p2 = criaPessoa('Maria', 'Joaquina', 1.50, 42);
console.log(p2.fala('falando sobre js'));
console.log('---------------------------------------');
console.log(`O IMC de ${p1.nomeCompleto = 'Osvaldo Domingos'} é ${p1.imc}`);
console.log(`Alterando p2 para ${p2.nomeCompleto = 'José Ribeiro da Silva'}`);
console.log(`O nome atualizado de p2 é: ${p2.nome}`);