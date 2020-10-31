//CSSs
// importando bootstrap
import 'bootstrap';
//incorporando o bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//importando meu style personalizado
import './assets/css/style.css';
//importando GeraCPF
import GeraCPF from './modules/GeraCPF';

(function (){
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    
    exibir(gera.geraNovoCpf());
    function exibir(novoCpf){
        // criando a tag p e adicionando o cpf nele
        const p = document.createElement('p');
        const cpf = document.createTextNode(novoCpf);
        p.appendChild(cpf)
        p.classList.add('cpf');
        return cpfGerado.appendChild(p);
    }
})()
