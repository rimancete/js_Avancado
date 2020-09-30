(function () {
    
    const $frmImcCalculo = document.querySelector('.frmImcCalculo');
    //Escuta a cada submit do formulário e chama a função que iniciará o cálculo
    $frmImcCalculo.addEventListener('submit', calculoImc);
    // array contendo resultado do imc
    const imcResultadoTexto = [];
     // referenciar a div que exibirá o resultado;
     const divResultado = document.querySelector('.resultadoImc');
    /*
    ##################
    ##### FUNÇÕES ######
    ####################
    */
    function calculoImc(e) {
        // previne envio do formulário automáticamente
        e.preventDefault();

        //referenciando os values do inputs
        const peso = Number(document.querySelector('.peso').value);
        const altura = Number(document.querySelector('.altura').value);
        
        //validando os dados digitados e chamando função que escreve na tela
        if (!peso){
            divResultado.classList.add('dadosInvalidos');
            const msg = divResultado.innerHTML = `<p>Peso inválido</p>`;
            exibirResultadoImc(msg);

        }else if (!altura){
            divResultado.classList.add('dadosInvalidos');
            const msg = divResultado.innerHTML = `<p>Altura inválida</p>`;
            exibirResultadoImc(msg);
        }
        else{
        //criada variável que calcula o IMC
        const imc = peso / (altura ** 2)
        
        // criada variável que recebe o resultado da função que retorna o resultado do IMC
        const resultadoImc = calculaResultadoImc(imc);
        // chama função que escreve na tela o resultado
        exibirResultadoImc(resultadoImc);
        }
    }
    function calculaResultadoImc(imc){
        // busca texto dos p de resultado na página
        const imcResultado = document.querySelectorAll('.imcResultado p');
        // remove a classe 'dadosInvalidos'
        divResultado.classList.remove('dadosInvalidos');
        //cria varíavel que receberá o texto do resultado
        let resultado = null;
        // valida qual o resultado e aramazena na variável
        switch (true){
            case (imc < 18.5):
                resultado = `<p>Seu IMC é ${imc.toFixed(2)} (${imcResultado[0].textContent})</p>`;
                break;

            case (imc <= 24.9):
                resultado = `<p>Seu IMC é ${imc.toFixed(2)} (${imcResultado[1].textContent})</p>`;
                break;
            case (imc <= 29.9):
                resultado = `<p>Seu IMC é ${imc.toFixed(2)} (${imcResultado[2].textContent})</p>`;
                break;
            case (imc <= 34.9):
                resultado = `<p>Seu IMC é ${imc.toFixed(2)} (${imcResultado[3].textContent})</p>`;
                break;
            case (imc <= 39.9):
                resultado = `<p>Seu IMC é ${imc.toFixed(2)} (${imcResultado[4].textContent})</p>`;
                break;
            case (imc > 40):
            resultado = `<p>Seu IMC é ${imc.toFixed(2)} (${imcResultado[5].textContent})</p>`;
            break;
        }
        //retorna o resultado
        return resultado;
    }
    function exibirResultadoImc(resultadoImc){

        divResultado.innerHTML = resultadoImc;
        
    }
    
})()