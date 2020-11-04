// lendo e escrevendo arquivos
// criando e armazenando informações em json
const path = require('path');
const pessoasPath = path.resolve(__dirname, 'pessoas.json');
const escreve = require('./modules/escrever')
const pessoas = [
    {nome: 'Osvaldo'},
    {nome: 'Maria'},
    {nome: 'Raiane'},
    {nome: 'Pedro'},
];
//convertendo para objeto para JSON
let pessoasJSON = JSON.stringify(pessoas,'',2);
//PARTE 1 => enviando caminho e objeto para o módulo que escreve no arquivo
escreve(pessoasPath,pessoasJSON);

//lendo o arquivo JSON gerado
const ler = require('./modules/ler');
// função que lê os valores JSON e renderiza
//async await utilizado pois utilizamos promises no fs do módulo 'escrever.js
async function leJSON(caminhoJSON){
    const dados = await ler(caminhoJSON);
    renderizaDados(dados);
}
//função que renderiza os dados para html
function renderizaDados(dadosJSON){
    //fatiando os dados JSON
    dadosJSON = JSON.parse(dadosJSON)
    // PARTE 2 => Para cada valor JSON encontrado, no caso um objeto com uma chave, logá-lo
    dadosJSON.forEach(valor => console.log(valor.nome))
}
leJSON(pessoasPath);