// converter a factory function da validação do cpf para classe
/* para identificar um possível método estático,
se não houver 'this' significa que não há referência em instância
*/
(function () {
    //variável para receber os dígitos verificador do CPF informado pelo usuário
    let dgtColetado = null;
    //variável que armazenará os dígitos calculados
    let dgtCalculado = 0;
    class Cpf {
        constructor(cpf) {
            this.completo = cpf;
        }
        calculaDigito(digito) {
            // chama função que retorna o cálculo do dígito
            return retornaDigito(digito, this.validaCpf());
        }
        validaCpf() {
            //desmembrando e convertendo em array
            if (this.completo.replace(/\D+/g, '') === '') return  console.log('CPF Inválido');
            const cpfLimpo = this.completo.replace(/\D+/g, '');
            const cpfArr = Array.from(cpfLimpo);
            // Verificar se o CPF informado é uma sequência
            if (cpfLimpo[0].repeat(cpfLimpo.length) === cpfLimpo) return console.log('CPF Inválido');
            // verifica se CPF tem a qtde de números corretos e retorna inválido em caso negativo
            if (cpfArr.length !== 11) return console.log('CPF Inválido');
            return cpfArr
        }

    }
    function retornaDigito(digito, cpf) {
        const cpfArr = cpf;
        if (!cpfArr) return;
        //armazenando os dígitos do CPF informados em string
        dgtColetado = cpfArr[9].toString() + cpfArr[10].toString()
        //multiplicador (contador recurssivo) que resultará no valor conforme o dígito a ser calculado
        let multiplicador = 10 + digito;
        // retornar o cálculo de cada um dos 9 numeros do CPF
        const calculaDigitos = cpfArr.map((numero, indice) => {
            // se for o primeiro dígito
            if (digito === 1) {
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
            } else {
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
        // retorna a soma de todos números calculados
        const total = calculaDigitos.reduce((ac, numero, indice) => {
            // Se o índice for menor que 9
            if (indice < 9) {
                // retorna a soma do acumulador e número atual
                return ac += Number(numero);
            };
            if (digito === 2 && indice === 9) {
                return ac += dgtCalculado * 2
            } return ac;
        });
        //armazenar o dígito
        dgtCalculado = 11 - (total % 11);
        return dgtCalculado > 9 ? 0 : dgtCalculado;
    };
    // recebe o CPF, em string e completo, digitado pelo usuário
    const cpf = new Cpf(prompt('Informe seu CPF(com pontos e traço)'));
    // chama e valida método que valida a string e retorna um Array e em caso positivo retorna o array
    if (!cpf.validaCpf()) return;
    // Se não é possível retornar os dígitos
    if (typeof cpf.calculaDigito(1) === 'undefined'  || typeof cpf.calculaDigito(2) === 'undefined') return;
    else {
        cpf.digito1 = cpf.calculaDigito(1).toString();
        cpf.digito2 = cpf.calculaDigito(2).toString();
        //console.log(cpf.digito1+cpf.digito2);
        if ((cpf.digito1 + cpf.digito2) === dgtColetado) {
            console.log('CPF Válido');
        } else { console.log('CPF Inválido'); }
    }
})()