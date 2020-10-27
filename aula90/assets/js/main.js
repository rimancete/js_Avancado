// utilizando Fetch API (GET)
// EXEMPLO PADRÃO
// fetch('pagina3.html')
//     .then(resposta => {
//         if (resposta.status !== 200) throw new Error('ERRO 404 NOSSO');
//         return resposta.text()
//     })
//     .then(html => console.log(html))
//     .catch(e => console.log(e));

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
// deixando a execução da função síncrona
async function carregaPagina(el) {
    try {
        // recebendo valor do href do link da página
        const href = el.getAttribute('href');
        // setando a resposta para ser processada de forma síncrona
        const response = await fetch(href);
        // se o status da resposta for 200, retorna erro
        if (response.status !== 200) throw new Error('ERRO 404!');
        // setando que o processamento do html seja síncrono
        const html = await response.text()
        // exibe o html na div criada
        carregaResultado(html)
    } catch (e) {
        console.log(e);
    }
};

// função que recebe a response e exibe na DIV
function carregaResultado(response) {
    // selecionar e armazenar o resultado
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response
};

