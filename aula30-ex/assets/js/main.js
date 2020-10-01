(function (){
const dia = new Date().getDate();
const ano = new Date().getFullYear();
const hr = zeroTime(new Date().getHours());
const min = zeroTime(new Date().getMinutes());
const mesDescricao = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outrubro','novembro','dezembro'];
const mesTexto = `${mesDescricao[new Date().getMonth()]}`;

const diaDescricao = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sabado'];
const diaTexto = `${diaDescricao[new Date().getDay()]}`;

const h1 = document.querySelector('.container');

const dataCompleta = showFullDate(diaTexto,dia,mesTexto,ano,hr,min);

h1.innerHTML = dataCompleta;

function showFullDate (diaTexto,dia,mesTexto,ano,hr,min){
    let textFull;
    return textFull = `<h1>${diaTexto}, ${dia} de ${mesTexto} de ${ano}</h1><h1>${hr}:${min}</h1>`

};
function zeroTime (num){
    return num >= 10 ? num : `0${num}`;
};

})()
/*######################################
########### SOLUÇÃO NATIVA #############
######################################*/
// const h1 = document.querySelector('.container');
// const data = new Date();
// h1.innerHTML = `<h1>${data.toLocaleDateString('pt-br', {dateStyle: 'full', timeStyle: 'short'})}</h1`;