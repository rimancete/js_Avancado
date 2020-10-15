// função recursiva - função que auto se chama
function recursiva(max){
    console.log(max);
    // estabelecer limite para que a função pare
    if (max >= 10) return;
    max++;
    // chamando a própria função com parâmetro (i) atualizado
    recursiva(max);
}
recursiva(1)