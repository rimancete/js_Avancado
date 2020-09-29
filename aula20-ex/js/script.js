(function (){
    const $formPessoa = document.querySelector('#formPessoa');
    $formPessoa.addEventListener('submit', cadastrarPessoa);
    const pessoa = [];
    function cadastrarPessoa(e){
        e.preventDefault();
        const nome = document.getElementById('txtNome').value;
        const sobrenome = document.getElementById('txtSobrenome').value;
        const peso = document.getElementById('txtPeso').value;
        const altura = document.getElementById('txtAltura').value;
        pessoa.push(pessoaDados(nome, sobrenome, peso, altura));
        exibirDados(nome, sobrenome, peso, altura);
    }
    function exibirDados(nome, sobrenome, peso, altura){
        let texto = document.getElementById('texto');
        texto.innerHTML += `<p>${nome} ${sobrenome} pesa ${peso}kg e tem ${altura}mt de altura</p>`;
        console.log(pessoa);
    
    }
    function pessoaDados(nome,sobrenome,peso, altura){
        return {
            nome,
            sobrenome,
            peso,
            altura
        };
    }
    
})()