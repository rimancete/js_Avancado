// importando módulos node
// importando tudo que foi exportado
// const mod1 = require('./mod1');

// importando chaves específicas
// const nome = require('./mod1').nome
// const falaNome = mod1.falaNome();

// importando por associação via desestruturação
const {nome, sobrenome, falaNome} = require('./mod1');

//importando classe
const Pessoa = require('./mod1').Pessoa
const p1 = new Pessoa(nome);

console.log(nome);
console.log(falaNome());
console.log(p1.nome);
console.log()


// importando objetos node => não precisa mencionar o caminho, apenas o alias é necessário
const axios = require('axios');axios('https://otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e));