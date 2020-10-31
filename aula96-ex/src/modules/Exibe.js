export default class Exibe {
    constructor(msg, tipo){
        this.msg = msg;
        //s = Senha; e = Erro
        this.tipo = tipo;
        this.show();
    }
    show(){
        //cria elemento p dentro da div senha
        let p = document.createElement('p');
        //coloca msg dentro do p
        let msg = document.createTextNode(this.msg);
        const divSenha = document.querySelector('.resultado')
        //se o tipo for 'e' cria o p com a msg, adiciona-o na divSenha e seta classe de formatação de erro
        if (this.tipo === 'e'){
            p.appendChild(msg);
            p.classList.add('erro');
            divSenha.appendChild(p);
        } else{
            p.appendChild(msg);
            p.classList.add('senha');
            divSenha.appendChild(p);
        }
        
    }
}