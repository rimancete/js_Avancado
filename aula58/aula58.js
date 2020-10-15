// função construtora - constructor functions -> retorna objeto
// Iniciar o nome da função com letra maiúscula -> Ex: Pessoa (new)
// atributos separados por ';'

function Pessoa (nome, sobrenome){
    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = () => {
        console.log('Exibir método interno');
    };
    // 'this' são considerados métodos ou atributos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.fala = () => {
        console.log(`${this.nome}, sou um método`);
    };
}
const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa('Osvaldo', 'Costa');
p2.fala();