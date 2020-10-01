//data date
//O mês em javascript é como um array, portanto janeiro é 0 e assim por diante
const tresHoras = 60 * 60 * 3 * 1000; // 3hrs em milésimos(*1000)
const umDia = 60 * 60 * 24 * 1000; // um dia em milésimos(*1000)
const calculaData = new Date(0 + tresHoras - umDia); // 01/01/1970 timestamp unix ou época Unix
console.log(`Exibindo data calculada: ${calculaData.toString()}`);
// alterando para uma data específica
//                      y   m-1 d   h   min   sec   mil
let data = new Date(2019, 3, 20, 15, 14, 27, 1000);
console.log(`Exibindo data alterada: ${data.toString()}`);

//outro formato de data: data string
data = new Date('2019-04-20 20:20:59');
console.log(`A data string é: ${data.toString()}`);
// pegando dia, mês, ano, etc
data = new Date();
console.log(`Hoje é dia ${data.getDate()}`);
console.log(`O número do mês atual é ${data.getMonth() + 1}`); // Mês começa do zero
console.log(`Ano de ${data.getFullYear()}`);
console.log(`A hora atual é ${data.getHours()}`);
console.log(`Os minutos atuais são: ${data.getMinutes()}`);
console.log(`Os segundos atuais são: ${data.getSeconds()}`);
console.log(`Os milésimos atuais são: ${data.getMilliseconds()}`);
console.log(`O dia da semana é ${data.getDay()}`); // 0 - domingo, 6 - sábado

// date.now - outra forma de pegar a data atual
console.log(`Obtendo a data atual utilizando o Date.now: ${data = new Date(Date.now())}`);

//criar funções que formata data
console.log('-------------------------------------------------------------------------------');
function formataData (data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
};
function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}
formataData(data);
// formatando as datas
const dataBrasil = formataData(data);
console.log(`A data formata para o padrão brasileiro é: ${dataBrasil}`)
