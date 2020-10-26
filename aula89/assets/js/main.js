//XMLHttpRequest (requisição) + Promises


//utilizando callback - função que captura os dados
// const ajax = obj => {
//     //cria uma nova request
//     const xhr = new XMLHttpRequest();
//     // Ex: abre a request, nesse caso recebendo parâmetros do obj (o verbo[GET], url do obj [http....] e seta como assíncrono[true])
//     xhr.open(obj.method, obj.url, true);
//     // se fosse método POST, sar '.send' para envio dos dados de formulário, por exemplo
//     xhr.send();
//     //checar quando a requisição foi terminada
//     xhr.addEventListener('load', () => {
//         //verificar o código de resposta
//         // se o código for de sucesso
//         if (xhr.status >= 200 && xhr.status < 300) {
//             //atrela o método 'success' ao obj que recebe o que foi buscado
//             obj.success(xhr.responseText)
//         // se não, atrela o método 'error' ao obj que recebe o erro
//         } else {
//             obj.error(xhr.statusText)
//         }
//     })
// };

// // capturuar os eventos dos cliques
// document.addEventListener('click', e => {
//     // recebe o elemento clicado
//     const el = e.target;
//     // recebe qual tag HTML em minúsculo
//     const tag = el.tagName.toLowerCase();
//     // se a tag for link (a)
//     if (tag === 'a'){
//          // previne o clique do link
//         e.preventDefault();
//         carregaPagina(el);
//     }
// });
// function carregaPagina(el){
//     // recebendo valor do href do link da página
//     const href = el.getAttribute('href');
//     // carregar os dados(no caso, método, url, sucesso / erro)
//     ajax({
//         method: 'GET',
//         url: href,
//         success(response){
//             carregaResultado(response);
//         },
//         error(errorText){
//             console.log(errorText)
//         },
//     })
// }
// // função que recebe a response e exibe na DIV

// function carregaResultado(response){
//     // selecionar e armazenar o resultado
//     const resultado = document.querySelector('.resultado');
//     resultado.innerHTML = response
// };


// utilizando promisse
const ajax = obj => {
    return new Promise((resolve, reject) => {
        //cria uma nova request
        const xhr = new XMLHttpRequest();
        // Ex: abre a request, nesse caso recebendo parâmetros do obj (o verbo[GET], url do obj [http....] e seta como assíncrono[true])
        xhr.open(obj.method, obj.url, true);
        // se fosse método POST, sar '.send' para envio dos dados de formulário, por exemplo
        xhr.send();
        //checar quando a requisição foi terminada
        xhr.addEventListener('load', () => {
            //verificar o código de resposta
            // se o código for de sucesso
            if (xhr.status >= 200 && xhr.status < 300) {
                //atrela o método 'success' ao obj que recebe o que foi buscado
                resolve(xhr.responseText)
                // se não, atrela o método 'error' ao obj que recebe o erro
            } else {
                reject(xhr.statusText)
            }
        })
    })

};

// capturuar os eventos dos cliques
document.addEventListener('click', e => {
    // recebe o elemento clicado
    const el = e.target;
    // recebe qual tag HTML em minúsculo
    const tag = el.tagName.toLowerCase();
    // se a tag for link (a)
    if (tag === 'a') {
        // previne o clique do link
        e.preventDefault();
        carregaPagina(el);
    }
});
async function carregaPagina(el) {
    try{
           // recebendo valor do href do link da página
    const href = el.getAttribute('href');
    // carregar os dados(no caso, método, url, sucesso / erro)
    const objConfig = {
        method: 'GET',
        url: href
    };
    const response = await ajax(objConfig);
    } catch(e){
        console.log(e);
    }
 
}
// função que recebe a response e exibe na DIV

function carregaResultado(response) {
    // selecionar e armazenar o resultado
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response
};