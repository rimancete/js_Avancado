// métodos de instância e estáticos
// métodos estáticos não manipula valores de instância
function saudacao (){
    console.log('Bom dia. Vamos alterar o volume da TV');
    console.log
}
class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
        saudacao();
    }
    // métodos de instância
    aumentarVolume(){
        this.volume += 2;
    }
    dominuirVolume(){
        this.volume -= 2;
    }
    // método estático (para a classe em si)
    static trocaPilha(){
        //
        console.log('OK, vou trocar');
    }
    static resetaVolume(tv){
        console.log(`O volume do controle da TV ${tv} foi resetado`)
        return this.volume = 0;
    }
}
const c1 = new ControleRemoto('LG');
c1.aumentarVolume();
c1.aumentarVolume();
c1.aumentarVolume();

// quero trocar a pilha de todos os controles(método de classe)
console.log(c1);
ControleRemoto.trocaPilha();
console.log();

//resetando volume de todas as TVs
const tv = c1.tv;
c1.volume = ControleRemoto.resetaVolume(tv);
console.log(c1);
