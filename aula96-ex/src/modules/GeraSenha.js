import Exibe from './Exibe';
export default class GeraSenha {
    constructor() {
        this.$form = document.querySelector('.gerador-senha');
        this.eventos();
    }
    eventos() {
        this.$form.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.gera();
    }
    gera() {
        //se existir erro, limpa-o
        const erros = document.querySelectorAll('.erro');
        if (erros) {
            for (let p of erros) {
                p.remove()
            }
        }
        //se existir senha, limpa-a
        const senhas = document.querySelectorAll('.senha');
        if (senhas) {
            for (let p of senhas) {
                p.remove()
            }
        }
        //captura as opções e armazena nas propriedades, começando pela qtde de caracteres
        this.caracteres = Number(document.querySelector('.caracteres').value);
        //se a quantidade de caracteres for inferior a 4 ou superior a 12 exibe erro
        if (this.caracteres < 4 || this.caracteres > 20) {
            const erro = new Exibe('Quantidade de caracteres deve ser entre 4 e 20', 'e')
            return erro;
        }
        //captura as opções, armazena nas propriedades
        this.numeros = document.querySelector('.numeros').checked;
        this.maisculas = document.querySelector('.maiusculas').checked;
        this.minusculas = document.querySelector('.minusculas').checked;
        this.simbolos = document.querySelector('.simbolos').checked;

        // nenhuma opção for seleciona, exibe erro
        if (!this.numeros && !this.maisculas && !this.minusculas && !this.simbolos) {
            const erro = new Exibe('Selecione alguma opção', 'e');
            return erro;
        };
        let pass = '';
        /*enquanto a qtde de caracteres for menor que a qtde solicitada pelo usuário
        armazena os caracteres conforme pedido pelo usuário
        */
        for (let i = 0; pass.length < this.caracteres; i++) {
            // se maiúsculas true, salva o caracter gerado
            if (this.maisculas && (pass.length < this.caracteres)) {
                pass += String.fromCharCode(65 + Math.floor(Math.random() * 26));
            }
            // se minúsculas true, salva o caracter gerado
            if (this.minusculas && (pass.length < this.caracteres)) {
                pass += String.fromCharCode(97 + Math.floor(Math.random() * 26));
            }
            // se números true, salva o caracter gerado
            if (this.numeros && (pass.length < this.caracteres)) {
                pass += String(Math.floor(Math.random() * (10 - 0) + 0));
            }
            // se simbolos true, salva o caracter gerado
            if (this.simbolos && (pass.length < this.caracteres)) {
                const sym = "!\"@#$%&*()-_+={}[];:.,<>\u{20ac}";
                pass += sym.substr(Math.floor(sym.length * Math.random()), 1);
            }

        }
        //limpa o conteúdo na sequencia
        document.querySelector('.caracteres').value = '';
        document.querySelector('.numeros').checked = false;
        document.querySelector('.maiusculas').checked = false;
        document.querySelector('.minusculas').checked = false;
        document.querySelector('.simbolos').checked = false;
        const senha = new Exibe(pass, 's');
        return senha;
    }

}