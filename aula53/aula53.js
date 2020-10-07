//closures => capacidade de uma função em acessar seu escopo léxico
function calcula (x,y){
    return function (){
        return x + y;
    }
}
const soma = calcula(1,2);
console.dir(soma);