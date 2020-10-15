/* 1 - inserir '(', ')' e '<<'
2 - ok retirar símbolos excedentes(. /)
3 - ok caso seja um valor de cálculo falso e exibir msg de erro
3 - ok calculadora será um objeto

- retirar 0 dos decimais
- utilizar o '()'
usando arrow function, o this mantem para o elemento que referenciei inicialmente
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
    function Calculadora(display = 0, numero = 0){
             //armazena numeros e valor atual(display)
            this.display = Number(display);
            this.numero = Number(numero);
            this.somar = () => Number((Number(this.display) + Number(this.numero)).toFixed(2));
            this.subtrair = () => Number((Number(this.display) - Number(this.numero)).toFixed(2));
            this.multiplicar = () => Number((Number(this.display) * Number(this.numero)).toFixed(2));
            this.dividir = () => Number((Number(this.display) / Number(this.numero)).toFixed(2));
            this.porcentagem = () => Number(Number(this.display) * (Number(this.numero) / 100).toFixed(2));
            this.evidencia = () =>`(${this.display})`;
        
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
                        resultado = new Calculadora(displayColetado, numero).porcentagem();
                        display.textContent = resultado;
                        displayColetado = numero;
                        break;
                    case '/':
                        resultado = new Calculadora(displayColetado, numero).dividir();
                        display.textContent = resultado;
                        displayColetado = resultado;
                        break;
                    case 'x':
                        resultado = new Calculadora(displayColetado, numero).multiplicar();
                        display.textContent = resultado;
                        displayColetado = resultado;
                        break;
                    case '+':
                        resultado = new Calculadora(displayColetado, numero).somar();
                        display.textContent = resultado;
                        displayColetado = resultado;
                        break;
                    case '-':
                        resultado = new Calculadora(displayColetado, numero).subtrair();
                        display.textContent = resultado;
                        displayColetado = resultado;
                        break;
                    case '()':
                        resultado = new Calculadora(displayColetado, numero).evidencia();
                        display.textContent = resultado;
                        displayColetado = resultado;
                        break;
                }
            }
            
        }
        // armazena o botão clicado fo número, chama função que armazenará
        if (!el.classList.contains('ac') && !el.classList.contains('p') && !el.classList.contains('x') && !el.classList.contains('b') && !el.classList.contains('mais') && !el.classList.contains('menos') && !el.classList.contains('evidencia') && !el.classList.contains('igual') && !el.classList.contains('apagar')){
            return numero = armazenaNumeros(el);
            // se não, chama funçõão que limpa o display, salva o valor atual do display e seta operador
        } else{ return setaOperador(el)};
       
    }
    //função que limpa o valor do display
    function limpaDisplay() { return display.textContent = 0; };
    // função que retorna os números informados pelo usuário
    function armazenaNumeros(el) {
        // variavel que armazena o valor do display
        let nDisplay = Number(display.textContent);
        // se só houver o zero no display, limpa-o
        if (nDisplay = 0) return limpaDisplay();
        // coloca no display os botões que são números e o decimal
        const numeros = $container.querySelectorAll("button[class^='n'], button[class^='decimal']");
        for (let i in numeros){
            if (el.classList.contains(`n${i}`)){
                if (display.textContent === '0'){
                    display.textContent = '';
                    return display.textContent += i;
                }
                return display.textContent += i;
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
                return;
            }
        }
        // retorna para a variável o número informado pelo usuário
        return Number(display.textContent);
    }
    function salvaDisplay(op){
        displayColetado = Number(display.textContent);
        numero = displayColetado;
        return operador = op;
    };
    function setaOperador(el){
        if (el.classList.contains('p')){
            salvaDisplay('%');
            limpaDisplay();
        }
        if (el.classList.contains('ac')){
            limpaDisplay();
        }
        if (el.classList.contains('x')){
            salvaDisplay('x');
            limpaDisplay();
        }
        if (el.classList.contains('b')){
            salvaDisplay('/');
            limpaDisplay();
        }
        if (el.classList.contains('mais')){
            salvaDisplay('+');
            limpaDisplay();
        }
        if (el.classList.contains('menos')){
            salvaDisplay('-');
            limpaDisplay();
        }
        if (el.classList.contains('evidencia')){
            salvaDisplay('()');
            limpaDisplay();
        }
        if (el.classList.contains('apagar')){
            let num = display.textContent;
            num = num.substr(0, num.length - 1);
            display.textContent = num;
            if (display.textContent === ''){ return limpaDisplay()};
        }
    }

})()