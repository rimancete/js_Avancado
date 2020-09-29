function inicia(){
    const $formPessoa = document.querySelector('#formPessoa');
    const texto = document.getElementById('texto');
    const pessoa = [];
    function cadastrarPessoa(e){
        e.preventDefault();
    
        const nome = document.getElementById('txtNome');
        const sobrenome = document.getElementById('txtSobrenome');
        const peso = document.getElementById('txtPeso');
        const altura = document.getElementById('txtAltura');
        pessoa.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoa);

        texto.innerHTML =+ `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }
    $formPessoa.addEventListener('submit', cadastrarPessoa);    
    
    }
    

inicia();