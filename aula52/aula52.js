// escopo léxico => a função 'se lembra' onde foi sua declaração e seus 'vizinhos'
const nome = 'Osvaldo';
function falaNome (){
   console.log(nome);
};
falaNome();
console.log('-----------------------');
function usaFalaNome(){
    const nome = 'Otavio';
    // nesse caso a função abaixo se referencia do momento de sua declaração
    falaNome();
}
usaFalaNome();