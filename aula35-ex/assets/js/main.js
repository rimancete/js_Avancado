(function (){
    const elementos = [
        {tag: 'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag: 'footer', texto: 'Frase 3'},
        {tag: 'section', texto: 'Frase 4'}
    ];
    const container = document.querySelector('.container');
    let tagHtml = '';
    
    // //minha solução
    // for (let i = 0; i < elementos.length; i++){
    //     tagHtml += `<${elementos[i].tag}>${elementos[i].texto}</${elementos[i].tag}>`;
    // }
    // container.innerHTML += `<div>${tagHtml}</div>`;


    // solução alternativa
    // for (let i = 0; i < elementos.length; i++){
    //     //desestruturando o 'elementos'
    //     let {tag, texto} = elementos[i];
    //     tagHtml += `<${tag}>${texto}</${tag}>`;

    // }
    // container.innerHTML += `<div>${tagHtml}</div>`;

    const div = document.createElement('div');
    for (let i = 0; i< elementos.length; i++){
        //desestruturando
        let {tag, texto} = elementos[i];
        //criar a tag
        let tagCriada = document.createElement(tag);
        //criar o texto
        let textoCriado = document.createTextNode(texto);
        // inserir o textoCriado na tag
        tagCriada.appendChild(textoCriado);
        // inserir a tag com texto na div
        div.appendChild(tagCriada);
    }
    // inserir a div no container
    container.appendChild(div);

    

}) ()

