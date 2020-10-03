// escreva uma função que recebe 2 números e retorne o maior deles
(function (){
    let num1 = 50;
    let num2 = 50;

    // ********************** minha solução ******************************
    // console.log(calculaMaior(30,50));
    // function calculaMaior(num1, num2){
    //     if (num1 === num2){
    //         return 'Número iguais';
    //     }else if(num1 > num2){
    //         return `O primeiro número informado (${num1}) é maior que o segundo número`
    //     } else{
    //         return `O segundo número informado (${num2}) é maior que o primeiro número`
    //     }
  
  
    // ********************** segunda solução(reduzindo linha do if) ******************************
    // console.log(calculaMaior(30,50));
    // function calculaMaior(num1, num2){
    //     if (num1 === num2) return 'Número iguais';
    //     if(num1 > num2) return `O primeiro número informado (${num1}) é maior que o segundo número`;
    //     return `O segundo número informado (${num2}) é maior que o primeiro número`
    // }

    // ********************** terceira solução(operação ternária) ******************************
    // console.log(calculaMaior(10,5));
    // function calculaMaior(num1, num2){
    //     return num1 === num2 ? 'Número iguais' : num1 > num2 ? `O primeiro número informado (${num1}) é maior que o segundo número` : `O segundo número informado (${num2}) é maior que o primeiro número`;
        
    // }

    // ********************** quarta solução(operação ternária) ******************************
    const maior = (num1,num2) => num1 === num2 ? 'Número iguais' : num1 > num2 ? `O primeiro número informado (${num1}) é maior que o segundo número` : `O segundo número informado (${num2}) é maior que o primeiro número` ;
    console.log(maior(10,20));

}) ()