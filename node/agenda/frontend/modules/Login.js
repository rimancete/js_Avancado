import validator from 'validator'
export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass)
    }
    init() {
        this.events();
    }
    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.valida(e)
        })
    }
    valida(e) {
        const erros = document.querySelectorAll('.erro');
        for (let p of erros) {
            p.remove();
        };

        const el = e.target;
        const emailInput = el.querySelector('input[class="email"]');
        const passInput = el.querySelector('input[class="pass"]');
        let error = false;
        if (!validator.isEmail(emailInput.value)) {
            // criar p depois do input para exibir os erros
            let p = document.createElement('p');
            let errorMsg = document.createTextNode('Email inválido')
            p.appendChild(errorMsg);
            p.classList.add('erro');
            p.classList.add('alert-danger');
            emailInput.after(p);
            error = true
        }
        if (passInput.value.length < 6 || passInput.value.length > 20) {
            // criar p depois do input para exibir os erros
            let p = document.createElement('p');
            let errorMsg = document.createTextNode('A senha precisa ter entre 6 e 20 caracteres')
            p.appendChild(errorMsg);
            p.classList.add('erro');
            p.classList.add('alert-danger');
            passInput.after(p);
            error = true
        }
        // se não houver erro, premite envio do formulário
        if (!error) el.submit();
    }
}