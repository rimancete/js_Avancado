(function () {
    'use strict';
    // referenciar input text, botão e container
    let $tarefa = document.querySelector('.task');
    let addTask = document.querySelector('.add');
    let $container = document.querySelector('.container');
    // após abrir a página, carrega o JSON na tela
    tasksNow();
    //escuta a cada input do input text e chama função que o armazenamento do conteúdo do input text
    $tarefa.addEventListener('input',enableButton);
    //escuta o submit do container, chamando função que inicia o armazenamento do conteúdo do input text
    $container.addEventListener('submit',startSaveTask);
    // escuta o clique da div e se for o botão apagar chama função que excluirá a tarefa
    $container.addEventListener('click', delTask);
    
    
    
    
    /*#################################
    #############FUNÇÕES###############
    #################################*/

    //função que ativa/desativa o botão conforme conteúdo do input text
    function enableButton() {
        //verifica se tiver conteúdo no input text para chamar função que salvará o conteúdo
        addTask.disabled = Boolean(!$tarefa.value);
        // add/remove classe que formata o botão em estado disabled
        if (!addTask.disabled){
            addTask.classList.remove('btn-default-disable');
        } else{
            addTask.classList.add('btn-default-disable');
        }
    }
    //função que inicia o salvamento do dados se tiver valor no input
    function startSaveTask(e){
        //previne envio dos dados
        e.preventDefault();
        // se tiver valor no input text
        if ($tarefa.value){
            //chamar função que add a tarefa na ul
            showTask($tarefa.value);
            //chama função que armazenará a lista de tarefa
            saveTasks()
        }
    }
    // fução que recebe o valor do input e armazena no array
   
    function showTask(tarefas){
        // cria a li
        let li = document.createElement('li');
        //cria button
        let btnDelTask = document.createElement('button');
        // seta o value do botão
        btnDelTask.textContent = 'Apagar';
        // seta as classes do botao
        btnDelTask.setAttribute('class','btn-default apagar');
        //variável que add valor do input
        let task = document.createTextNode(tarefas);
        // adiciona task na li
        li.appendChild(task);
        //adiciona o botão apagar na li
        li.appendChild(btnDelTask);
        //referencia ul
        let ul = document.querySelector('.task-list');
        //adiciona li na ul
        ul.appendChild(li);
        //cria hr
        const hr = document.createElement('hr');
        //adiciona hr na li
        li.appendChild(hr);
        // chama função que limpa o input recolocando o foco no mesmo
        clearTxtTask();
    }
    // função que limpa o input e volta o foco no input
    function clearTxtTask(){
        $tarefa.value ='';
        $tarefa.focus();
    }

    function delTask(e){
        //armzena onde foi clicado
        const el = e.target;
        // se o botão apagar foi clicado
        if (el.classList.contains('apagar')){
            //apaga o hr e o li
            el.nextElementSibling.remove();
            el.parentElement.remove();
            // NEW Salvar em JSON
            saveTasks()
        }
    }
    function saveTasks(){
        // referencia as lis na tela
        const lis = $container.querySelectorAll('li');
        // cria array que armazenará os texts das tarefas
        const allTasks = [];
        //enquanto houver lis
        for (let i of lis){
            //salva o texto na let temporaria
            let taskText = i.innerText
            // atualiza o texto removendo a palavra 'Apagar'
            taskText = taskText.replace('Apagar','');
            allTasks.push(taskText);
        }
        /*##############################
        ############# Json #############
        ##############################*/
        //variável que armazena o array(stringfy) de tarefas em formato JSON(string)
        const tarefasJSON = JSON.stringify(allTasks);
        // criando armazenamento local
        localStorage.setItem('tasks', tarefasJSON);
    }
    function tasksNow(){
        //variável que resgata, do local storage, as tarefas em string em JSON
        const tasks = localStorage.getItem('tasks');
        // variável que converte(parse) a string, em array javascript
        const allTasks = JSON.parse(tasks);
        
        // enquanto existir tarefas
        for (let i of allTasks){
            // envia o valor para função que escreve na tela
            showTask(i);
        }
    }
 
})()