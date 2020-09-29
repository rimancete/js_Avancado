const alunos = ['Luiz', 'Maria','Osvaldo'];
alunos.push('Raiane');
alunos.unshift('Roberto');
alunos.unshift('Davi');
console.log(`Array após adição de novos elementos: ${alunos}`);
console.log(`----------------------------------------------------------------`);

// remover o último elemento do array, armazenando em uma varíavel
console.log(`Array atual: ${alunos}`);
const ultimoAlunoRemovido = alunos.pop();
console.log(`Array atual após remoção do último elemento: ${alunos}`);
console.log(`Último aluno removido: ${ultimoAlunoRemovido}`);
console.log(`----------------------------------------------------------------`);

// remover o primeiro elemento do array, armazenando em uma varíavel
console.log(`Array atual: ${alunos}`);
const primeiroAlunoRemovido = alunos.shift();
console.log(`Array atual após remoção do primeiro elemento: ${alunos}`);
console.log(`Primeiro aluno removido: ${primeiroAlunoRemovido}`);
console.log(`----------------------------------------------------------------`);

// removendo elementos sem alterar valores do índices
console.log(`Array atual: ${alunos}`);
delete alunos[0];
console.log(`Array atual após remoção do primeiro elemento(mantendo o índice): ${alunos}`);
console.log(`----------------------------------------------------------------`);

// voltando o valor 'Roberto' para o elemento 'undefined'
alunos[0] = 'Roberto';
console.log(`Array atual após update do primeiro elemento: ${alunos}`);
console.log(`----------------------------------------------------------------`);

// add elementos ao array
alunos.push('Luiza');
alunos.push('Eduardo');
console.log(`Array atual após add de dois elementos: ${alunos}`);
console.log(`----------------------------------------------------------------`);

// selecionando intervalos de elementos
console.log(`Exibindo os alunos entre os índices 0 e 2: ${alunos.slice(0,3)}`);
console.log(`Array atual completo: ${alunos}`);
console.log(`Exibindo os alunos entre os índices 0 e o penúltimo: ${alunos.slice(0,-1)}`);
console.log(`O tipo do array é ${typeof alunos}`);
console.log(`Portanto para validar se é um array, retornar booleano se instanceof de alunos é array:  ${alunos instanceof Array}`);
console.log(`----------------------------------------------------------------`);



