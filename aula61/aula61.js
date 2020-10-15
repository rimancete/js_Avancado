// função geradora => entregará um valor definido(que poderá ser usada para performance)
// retornara o valor (yield) a cada vez(next) que a função é chamada
// se utilizar 'return' a função não chamará os yields seguintes
function* geradora1 (){
    //código para retornar o valor
    yield 'valor 1';
    //código para retornar o valor
    yield 'valor 2';
    //código para retornar o valor
    yield 'valor 3';
}
const g1 = geradora1();
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);

// iterando enquanto houver valor
// for (let valor of g1){
//     console.log(valor);
// }

// iterando infinitamente enquanto o yield for chamado
function* geradora2(){  
    let i = 0;

    while (true){
        yield i;
        i++;
    }
}
// const g2 = geradora2();
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);


function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
yield* geradora3();
yield 3;
yield 4;
yield 5;
}

const g4 = geradora4();

// função geradora que chama outra função geradora para execução anterior
// for (let valor of g4){
//     console.log(valor);
// }
function* geradora5(){
    yield function (){
        console.log('Vim do y1');
    };

    // ...
    yield function(){
        console.log('Vim do y2');
    };
}
//variável que recebe a função com os yields
const g5 = geradora5();
//variáveies que recebe os yields determinados
const func1 = g5.next().value;
const func2 = g5.next().value;
//chamando as funções que executam o definido por yiel
func1();
func2();