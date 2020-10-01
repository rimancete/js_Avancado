const data = new Date();
const diaSemana = data.getDay();
let diaSemanaTexto = getDiaSemanaTexto(diaSemana);
function getDiaSemanaTexto (diaSemana){
    let diaSemanaTexto;
    switch (diaSemana){
        case 0:
            return diaSemanaTexto = 'Domingo';
        case 1:
            return diaSemanaTexto = 'Segunda';
        case 2:
            return diaSemanaTexto = 'Terça';
        case 3:
            return diaSemanaTexto = 'Quarta';
        case 4:
            return diaSemanaTexto = 'Quinta';
        case 5:
            return diaSemanaTexto = 'Sexta';
        case 6:
            return diaSemanaTexto = 'Sábado';
        default:
            return diaSemanaTexto = '';
    }
}
console.log(`Hoje é ${diaSemanaTexto} (${diaSemana})`);