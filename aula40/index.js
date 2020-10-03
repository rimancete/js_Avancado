// break e continue

//exemplo de continue -> segue para próxima iteração
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let numero of numeros){
    if (numero === 2){
        console.log('Pulei o número 2');
        continue;
    }
    //exemplo de break -> sai do laço >>> costuma ser usado quando estamos procurando um valor específico de uma varíavel/bd com muitos índices/valores
    if (numero === 7){
        console.log('Encerrando o programa');
        break;
    }
    console.log(numero);
}