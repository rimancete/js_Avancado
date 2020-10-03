/* escreva uma função que recebe um número e
retorne o seguinte:
- Número é divível por 3 = Fizz
- Número é divível por 5 = Buzz
- Número é divível por 3 e 5 = FizzBuzz
- Número NÃO é divisível por 3 e 5 = Retorna o próprio número
- Checar se o número é realmente um número = retorna o próprio valor
- Use a função com números de 0 a 100
*/


// ********************************* minha solução *********************************
(function (){
    const fizzBuzz = (numero) => {
        
        if (typeof numero !== 'number') return `'${numero}' não é um número!`;
            //checagens
            if (numero % 3 === 0 && numero % 5 === 0) return `${numero} FizzBuzz`;
            if (numero % 3 === 0) return `${numero} Fizz`;
            if (numero % 5 === 0) return `${numero} Buzz`;
            return `${numero}`;
    }
    console.log(fizzBuzz('oi'));
    for (let i = 0; i <=100; i++){
    console.log(fizzBuzz(i));
    }
})()