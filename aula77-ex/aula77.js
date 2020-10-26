// validador CPF
/*
1- Coleta CPF completo(com pontos e traços)
2 - Desmembrar cada dígito do CPF para calculo:
2.1 - Calcular cada um dos 9 números recurssivamente de 10 a 2 e salvar a soma de todos os cálculos:
Molde: (numero 1 * 10) => (numero 2 * 9) => (numero 3 * 8) => (numero 4 * 7) => (numero 5 * 6) =>
(numero 6 * 5) => (numero 7 * 4) => (numero 8 * 3) => (numero 9 * 2) = total1

2.2 - Calular o primeiro dígito:
Molde: 11(total de dígitos) - (total1 % 11) = digito 1
#Se digito 1 > 9 => digito 1 = 0

2.3 - Calcular cada um dos 9 números com o digito 1, recurssivamente de 11 a 2 e salvar a soma de todos os cálculos:
Molde:  (numero 1 * 11) => (numero 2 * 10) => (numero 3 * 9) => (numero 4 * 8) => (numero 5 * 7) =>
(numero 6 * 6) => (numero 7 * 5) => (numero 8 * 4) => (numero 9 * 3) => (digito 1 * 2) = total2
2.3.1 - 2.2 - Calular o segundo dígito:
Molde: 11(total de dígitos) - (total2 % 11) = digito 2
#Se digito 1 > 9 => digito 1 = 0

3 - Concatenar o resultado  e comparar com o CFP informado. Se true, CPF válido, se não CPF inválido
*/

/*
1 - Receber CPF como string
1.1 - Remover os '.' e '-' com replace(/\D+/g, '') => Expressão regular: Tudo que não for número(/\D/g), substitiu por nada('') => cpfLimpo = cpf.replace(/\D+/g, '');
2- Converter o retorno(somente números) de string para array => cpfArr = Array.from(cpfLimpo)
3 - Utilizar map, filter ou reduce para accessar cada elemento para realizar os cálculos => cpfArray.reduce((ac, numero) => ac + Number(numero), 0));
*/
(function () {
    const cpf = new Cpf(prompt('Informe seu CPF(com pontos e traço)'));
    //variável para receber os dígitos verificador do CPF informado pelo usuário
    let dgtColetado = null;
    //variável que armazenará os dígitos calculados
    let dgtCalculado = 0;
    function Cpf(cpf) {
       this.completo = cpf;
    };
    // método que calcula os dígitos
    Cpf.prototype.calculaDigito = function (digito) {
        // chama função que retorna o cálculo do dígito
        return retornaDigito(digito, this.completo);
    };
    function retornaDigito(digito, cpf) {
         //desmembrando e convertendo em array
         if (cpf.replace(/\D+/g, '') === '') return console.log('CPF Inválido');
         const cpfLimpo = cpf.replace(/\D+/g, '');
         const cpfArr = Array.from(cpfLimpo);
        //método que verificar se o CPF informado é uma seuência
        if (cpfLimpo[0].repeat(cpfLimpo.length) === cpfLimpo) return console.log('CPF Inválido');
         // verifica se CPF tem o número de números corretos e retorna inválido em caso negativo
        if (cpfArr.length !== 11) return console.log('CPF Inválido');
        //verifica se os números são sequenciais
        //armazenando os dígitos do CPF informados em string
        dgtColetado = cpfArr[9].toString()+cpfArr[10].toString()
         //multiplicador (contador recurssivo) que resultará no valor conforme o dígito a ser calculado
        let multiplicador = 10 + digito;
        // retornar o cálculo dos dígitos
        const calculaDigitos = cpfArr.map((numero, indice) => {
        // se for o primeiro dígito
        if (digito === 1){
            // Se indice menor que 9(somente números antes dos dígitos)
            if (indice < 9) {
                // retorna a multiplicação de cada numero e o multiplicador
                multiplicador--;
                return Number(numero) * multiplicador;
            };
            // se número atual for o último, seta dígito para 2 para calcular o segundo dígito
            if (indice === 11) digito = 2;   
            //retorna somente o próprio dígito
            return Number(numero);
        // se não(dígito for o segundo)
        }else{
            // Se indice menor que 9(somente números antes dos dígitos)
            if (indice < 9) {
                // retorna a multiplicação de cada numero e o multiplicador
                multiplicador--;
                return Number(numero) * multiplicador;
            };
            // se for o nono numéro
            // if( indice === 9){
            //     // retorna primeiro dígito multiplicado por 2
            //     return dgtCalculado * 2;
            // }
            //retorna somente os próprios dígitos informados
            return Number(numero);
            }
        });
        // retorna a soma de todos números
        const total = calculaDigitos.reduce((ac, numero, indice) => {
            // Se o índice for menor que 9
            if (indice < 9) {
                // retorna a soma do acumulador e número atual
                return ac += Number(numero);
            };
            if (digito === 2 && indice === 9){
                return ac += dgtCalculado * 2
            } return ac;
        });
        //armazenar o primeiro dígito
        dgtCalculado = 11 - (total % 11)
        return dgtCalculado > 9 ? 0 : dgtCalculado;
    };
    // Se não é possível retornar os dígitos
    if (!cpf.calculaDigito(1) || !cpf.calculaDigito(2)) return;
    else{
        cpf.digito1 =cpf.calculaDigito(1).toString();
        cpf.digito2 =cpf.calculaDigito(2).toString();
    //console.log(cpf.digito1+cpf.digito2);
    if ((cpf.digito1+cpf.digito2) === dgtColetado){
        console.log('CPF Válido');
    }else{console.log('CPF Inválido');}
    }
    
})()