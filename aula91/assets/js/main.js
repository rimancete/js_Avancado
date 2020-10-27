// Fetch API e Axios(JSON)
//utilizando Fetch API
// fetch('pessoas.json')
//     .then(response => response.json())
//     .then(json => carregaElementosNaPagina(json));

//utilizando Axios (https://github.com/axios/axios)
axios('pessoas.json')
    .then(response => carregaElementosNaPagina(response.data));

function carregaElementosNaPagina(json){
    // exibir os dados em uma tabela
    const table = document.createElement('table');
    
    for (let pessoa of json){
        const tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);
        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);
        td = document.createElement('td');
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);
        table.appendChild(tr);
    }
    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
};