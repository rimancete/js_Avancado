/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU
! -> NOT -> NÃO
*/
const expressaoAnd = true && true && true && true;
const expressaoOr = false || false || false || false;
const usuario = 'Osvaldo';
const senha = '123456'
const vailogar = (usuario === 'Osvaldo') && (senha === '12345') // Valida se usuário e senha são true
console.log(vailogar);