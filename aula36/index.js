// for in -> Lê os índices(array) ou chaves(objetos) do objeto -> quando precisa também d índice

//percorrendo frutas
const frutas = [ "Pera", 'Maça', 'Uva'];

for (let i in frutas){
    console.log(frutas[i]);
}


// percorrendo 'pessoa'
const pessoa = {
    nome: 'Osvaldo',
    sobrenome: 'Costa',
    idade: 33
};

for (let index in pessoa){
    console.log(pessoa[index]);
}

// acessando atributos de 'pessoa'
const chaves = 'sobrenome'
console.log(pessoa[chaves]);

//iterando 'pessoa' desestruturando o objeto 'pessoa'
for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}