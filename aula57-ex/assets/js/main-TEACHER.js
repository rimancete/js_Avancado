/* 1 - inserir '(', ')' e '<<'
2 - ok retirar símbolos excedentes(. /)
3 - ok caso seja um valor de cálculo falso e exibir msg de erro
3 - ok calculadora será um objeto

- retirar 0 dos decimais
- utilizar o '()'
*/
(function () {
    // referenciar container, display e botões
    const $container = document.querySelector('.container');
    const display = document.querySelector('.display');
    //seta variáveis
    let displayColetado = 0;
    let numero = 0;
    let operador = '';
    let res = 0;
    //criando calculadora
    function calculadora(display = 0, numero = 0) {
        return {
            //armazena numeros e valor atual(display)
            display,
            numero,
            get somar() {
                res = (Number(this.display) + Number(this.numero)).toFixed(2);
                return  res;
            },
            get subtrair() { return Number((this.display -= this.numero)).toFixed(2); },
            get multiplicar() { return Number((this.display *= this.numero)).toFixed(2); },
            get dividir() { return Number((this.display /= this.numero)).toFixed(2); },
            get porcentagem() { return Number((this.display * (this.numero / 100))).toFixed(2); },
            get evidencia() { return `(${this.display})` }
        };
    }
    // escutar clique do container
    $container.addEventListener('click', iniciaCalculo);


    /*####################
    ####### funções ######
    ####################*/

    function iniciaCalculo(e) {
        //variavel que armazena o elemento clicado
        const el = e.target;
        // se existir operador, verifica qual e retorna no display o resultado do cálculo
        if (operador !== ''){
            let resultado = 0;
            if (el.classList.contains('igual')) {
                switch (operador) {
                    case '%':
                        resultado = calculadora(displayColetado, numero).porcentagem;
                        display.textContent = resultado;
                        break;
                    case '/':
                        resultado = calculadora(displayColetado, numero).dividir;
                        display.textContent = resultado;
                        break;
                    case 'x':
                        resultado = calculadora(displayColetado, numero).multiplicar;
                        display.textContent = resultado;
                        break;
                    case '+':
                        resultado = calculadora(displayColetado, numero).somar;
                        display.textContent = resultado;
                        break;
                    case '-':
                        resultado = calculadora(displayColetado, numero).subtrair;
                        display.textContent = resultado;
                        break;
                    case '()':
                        resultado = calculadora(displayColetado, numero).evidencia;
                        display.textContent = resultado;
                        break;
                }
            }
            
        }
        // armazena o botão clicado fo número, chama função que armazenará
        if (el.classList.contains('num')){
            if (el.textContent !== 0 && display.textContent === '0'){
                display.textContent = '';
                 return display.textContent = el.textContent;
            }
            display.textContent += el.textContent;
            return numero = armazenaNumeros(el);
        }
        if (el.classList.contains(`decimal`)){
            let num = display.textContent + '.';
            const i = num.indexOf('.');
            display.textContent = num;
            if(num.indexOf('..') !== -1){
                num = num.substr(0, num.length - 1);
                return display.textContent = num;    
            }
            if  (num.lastIndexOf('.') > i){
                num = num.substr(0, num.length - 1);
                return display.textContent = num;
            }
            return display.textContent = num;
    }
         // se não, chama funçõão que limpa o display, salva o valor atual do display e seta operador
         else{ return setaOperador(el)};
       
    }
    //função que limpa o valor do display
    function limpaDisplay() { return display.textContent = 0; };
    // função que retorna os números informados pelo usuário
    function armazenaNumeros(el) {
        // variavel que armazena o valor do display
        let nDisplay = Number(display.textContent);
        // se só houver o zero no display, limpa-o
        if (nDisplay = 0) return limpaDisplay();
    
        
        // retorna para a variável o número informado pelo usuário
        return Number(display.textContent);
    }
    function salvaDisplay(op){
        displayColetado = numero;
        return operador = op;
    };
    function setaOperador(el){
        if (el.classList.contains('p')){
            limpaDisplay();
            salvaDisplay('%');
        }
        if (el.classList.contains('ac')){
            limpaDisplay();
        }
        if (el.classList.contains('x')){
            limpaDisplay();
            salvaDisplay('x');
        }
        if (el.classList.contains('b')){
            limpaDisplay();
            salvaDisplay('/');
        }
        if (el.classList.contains('mais')){
            limpaDisplay();
            salvaDisplay('+');
        }
        if (el.classList.contains('menos')){
            limpaDisplay();
            salvaDisplay('-');
        }
        if (el.classList.contains('evidencia')){
            limpaDisplay();
            salvaDisplay('()');
        }
        if (el.classList.contains('apagar')){
            let num = display.textContent;
            num = num.slice(0, -1);
            display.textContent = num;
            if (display.textContent === ''){ return limpaDisplay()};
        }
    }

})()