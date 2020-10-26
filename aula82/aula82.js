// Heranças com classes
// ATENÇÃO => evitar criar mais que duas heranças par que o código não fique de difícil manutenção e leitura
// Também podemos reescrever um método já criado anteriormente pela classe pai.
class DispositoEletronico {
    constructor(descricao){
        this.descricao = descricao;
        this.ligado = false;
    };
    ligar(){
        if (this.ligado) {
            console.log(this.descricao + ' está ligado')    ;
            return;
        };
        this.ligado = true;
    };
    desligar(){
        if (!this.ligado) {
            console.log(this.descricao + ' está desligado');
            return;
        }
        this.ligado = false;
    };
};

class Smartphone extends DispositoEletronico{
    constructor(descricao, cor, modelo){
        // chamando classe pai com o atributo que queremos reutilizar na nova classe
        super(descricao);
        this.cor = cor;
        this.modelo = modelo;
    };
};

class Tablet extends DispositoEletronico{
    constructor(descricao, cor, modelo){
        // chamando classe pai com o atributo que queremos reutilizar na nova classe
        super(descricao);
        this.cor = cor;
        this.modelo = modelo;
        this.isMovel = false;
    };
    movel() {
        if (!this.isMovel) {
            this.isMovel = true;
            return console.log(`Agora ${this.descricao} ${this.modelo} está setado COM internet móvel`)
        }else{
            this.isMovel = false;
            return console.log(`Agora ${this.descricao} ${this.modelo} está setado SEM internet móvel`)
        }
    };
};
const d1 = new DispositoEletronico('PS4');
d1.ligar();
d1.desligar();
console.log(d1);
console.log();

const s1 = new Smartphone('Xiaomi', 'Prata', 'Mi9 SE');
console.log(s1)

console.log();
const t1 = new Tablet('Multilaser', 'Preto', 'M10 Plus');
t1.movel();
console.log(t1)