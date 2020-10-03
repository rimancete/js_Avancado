/* Escreva uma função chamada ePaisagem que
recebe dois argumentos (largura, altura) de uma imagem (number).
returne true se a imagem estiver no modo paisagem
*/

// ********************* minha solução ******************************
// (function (){
// const img = [300, 200];
// const [largura, altura] = img;
// const ePaisagem = (largura, altura) => largura === altura ? `Imagem quadrada` : largura > altura ? `A imagem está no modo paisagem` : `A imagem está no modo retrato`;
// console.log(ePaisagem(largura, altura));
// })()

// ********************* outra solução ******************************
const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(1920, 1080));