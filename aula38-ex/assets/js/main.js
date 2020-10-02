(function (){
    const paragrafos = document.querySelectorAll('.paragrafos p');
    //armazenando todo o estilo do CSS do body
    const estilosBody = getComputedStyle(document.body);
    // armazenando o backgroung do body
    const backgroundColorBody = estilosBody.backgroundColor;


    // MINHA SOLUÇÃO
    // for (let i = 0; i < paragrafos.length;i++){
    //     paragrafos[i].style.backgroundColor = backgroundColorBody;
    //     paragrafos[i].style.color = 'white';

    // }
    for (let i of paragrafos){
        i.style.backgroundColor = backgroundColorBody;
        i.style.color = 'white';
    }
})()