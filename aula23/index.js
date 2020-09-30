/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"
FALSY 
*false (0, "", null, undefined) -> qualquer coisa diferente disso é true
*/
console.log(`'Osvaldo' e true(verdadeiro) e NaN(false) -> ${'Osvaldo' && true && NaN}`); // Retorna o valor da ultima expressão
console.log(`'Luiz'(verdadeiro) ''(falso) e 'Maria'(verdadeiros) -> ${'Luiz' && '' && 'Maria'}`); // Retorna o valor da expressão false

//Se vaiExecutar for verdadeira, executa a função falaoi
function falaOi (){
    return 'oi';
}
let vaiExecutar = 'Joaozinho';
console.log(`Se vaiExecutar for verdadeiro, executa falaOi -> ${vaiExecutar && falaOi()}`);

/*****************************
 *  ||
 * 
 ****************************/

 console.log(`Retorna o valor da primeira expressão verdadeira -> ${0 || false || null || 'Luiz Otavio' || true}`);
 const corUsuario = 0;
 // Se o usuário escolher alguma cor, seta o valor de cor. Se não setar nada, coloca a cor padrão
 const corPadrao = corUsuario || 'preto';
 console.log(`Se o usuário não escolher cor, retorna o padrão -> ${corPadrao}`);

 const a = 0;
 const b = null;
 const c = false;
 const d = false;
 const e = NaN;

 console.log(a || b || c || d || e);