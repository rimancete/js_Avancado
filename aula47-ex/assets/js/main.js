/*
Botão iniciar
- Conta até 23:59:59;
- Ao ser 'reclicado' continua a execução da onde parou;

Botão pausar
- Ele pára o timer e pinta de vermelho o texto;
- MELHORIA:  Ao ser clicado duas vezes seguidas o timer é continuado;

Botão zerar
- Zera o contador
*/
(function () {
    // referênciar botão iniciar e div container
    const $btnStart = document.querySelector('.btn-start');
    let divContainer = document.querySelector('.container');
    // criar flag se timer está em execução ou não
    let timerIsOn = 0;
    // cria variavel que controlará o setIterval do timer
    let cTimer;
    //cria contador dos segundos
    let i = 0;
    // PERFORMANCE - Add evento de clique na página em si
    document.addEventListener('click', function(e){
        //armazenando qual elemento foi clicado
        const el = e.target;
        // localiza o botão 'enviar' e executa as ações
        if (el.classList.contains('btn-start')){
            iniciaTimer();
        } else if(el.classList.contains('btn-pause')){
            pausaTimer();
        } else if(el.classList.contains('btn-stop')){
            paraTimer();
        }
    });
    
    //função que atualiza o timer e o escreve na tela
    function iniciaTimer() {
        // retira a classe que formata o p em evidência
        divContainer.classList.remove('timerStopped');
        // add a classe que formata o p
        divContainer.classList.add('timer');
        if (!timerIsOn) {
            timerIsOn = 1;
            executaTimer();
        }
    };
    function executaTimer() {
        //criar variavel com a data passando o segundos em milésimos(para zerar o contador)
        let data = new Date(i *1000);
        escreveTimer(data);
        i++;
        // executa o timer até 1s
        cTimer = setTimeout(executaTimer, 1000);
        
    };
    function escreveTimer(data) {
        //criando o h2
        let h2 = document.createElement('h2');
        // criando o p
        let p = document.createElement('p');
        // se já existir o p e o h2, deletar
        if (Boolean(divContainer.querySelector('h2')) && Boolean(divContainer.querySelector('p'))) {
            divContainer.firstElementChild.remove();
            divContainer.firstElementChild.remove();
        }
        // armazenando o título
        let h2Title = document.createTextNode('Meu timer');
        // armazenando o texto no h2
        h2.appendChild(h2Title);
        //armazenando o valor do timer
        let timer = document.createTextNode(data.toLocaleTimeString('pt-BR',{
            hour12: false,
            //ajustando o timezone(GMT ou UTC) para zerar a hora
            timeZone: 'UTC'
        }));
        //escrevendo o timer no p
        p.appendChild(timer);
        $btnStart.before(h2);
        $btnStart.before(p);
        return h2, p;
    }
    //função que pára o contador, seta a flag do timer para off e formata a fonte
    function pausaTimer (){
        clearTimeout(cTimer);
        timerIsOn = 0;
        // alterar cor da fonte para vermelho e bold
        divContainer.classList.add('timerStopped');
    }
    // função que reinicia o contador formatando a fonte
    function paraTimer(){
        pausaTimer();
        // reseta o valor do timer
        i = 0;
        let data = new Date(i);
        escreveTimer(data);
        // alterar cor da fonte para vermelho e bold
        divContainer.classList.remove('timerStopped');
    }

})()
