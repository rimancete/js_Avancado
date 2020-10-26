(function () {

    //variável que receberá o valor dos dígitos do CPF calculados e Coletados
    let dgtCalculado = 0;
    let dgtColetado = null;

    // cria class que valida os dados e cria um novo usuário
    class Usuario {
        constructor() {
            // receber valores dos inputs
            this.nome = document.querySelector('.nome').value;
            this.sobrenome = document.querySelector('.sobrenome').value;
            this.cpf = document.querySelector('.cpf').value;
            this.user = document.querySelector('.user').value;
            this.pass = document.querySelector('.pass').value;
            this.rpass = document.querySelector('.rpass').value;
            // recebe o container
            this.$container = document.querySelector('.container');
            this.eventos();
        }
        eventos() {
            //escuta o envio de formulário e chama class que recebe o evento  
            this.$container.addEventListener('submit', e => {
                // chama método que recebe o evento
                this.handleSubmit(e);
            });
        }
        handleSubmit(e) {
            e.preventDefault();
            this.valida();
        }
        valida() {
            //limpa as mensagens de erro atuais
            const erros = document.querySelectorAll('.erro');
            for (let p of erros) {
                p.remove();
            };
           
            for (let campo of this.$container.querySelectorAll('.validar')) {
                const label = campo.previousElementSibling.textContent
                if (!campo.value) {
                    this.exibeErro(`Campo "${label}" não pode estar vazio`, campo);
                } else if (campo.classList.contains('cpf')) {
                    this.validaCpf(this.cpf)
                } else if (campo.classList.contains('user')) {
                    // salva a expressão regular que identifica caracter especial no usuário
                    const regex = /[!@#\$%\^\&*\)\(+=._-]/
                    // salva o boolean do teste se o valor contem o regex definido
                    const isCaracterEspecial = regex.test(this.user);
                    // se tiver, exibe o erro
                    if (isCaracterEspecial) {
                        this.exibeErro('Campo "Úsuário" deve conter número e/ou letras', document.querySelector('.user'));
                        //se não, verifica o tamanho da string
                    } else {
                        // se menor ou igual a 3 ou maior ou igual a 12, retorna erro, se não salva o dado
                        if (this.user.length < 3 || this.user.length > 12) this.exibeErro('Campo "Usuário" deverá ter entre 3 e 12 caracteres', document.querySelector('.user'));
                    }

                } else if (campo.classList.contains('pass')) {
                    // se menor ou igual a 6 ou maior ou igual a 12, retorna erro
                    if (this.pass.length < 6 || this.pass.length > 12) {
                        this.exibeErro('Campo "Senha" deve ter entre 6 e 12 caracteres', document.querySelector('.pass'));
                    }

                } else if (campo.classList.contains('rpass')) {
                    // se o tamanho da string do repetir senha for menor ou igual a 6 ou maior ou igual a 12, retorna erro
                    if (this.rpass.length < 6 || this.rpass.length > 12) {
                        return this.exibeErro('Campo "Repetir Senha" deve ter entre 6 e 12 caracteres', document.querySelector('.rpass'));
                    }
                    // se as senhas não forem iguais, retorna erro
                    if (this.pass !== this.rpass) {
                        this.exibeErro('As senhas devem ser iguais', document.querySelector('.pass'));
                        this.exibeErro('As senhas devem ser iguais', document.querySelector('.rpass'));
                        //se não, armazena as senhas
                    }
                }
            }
        };
        validaCpf(cpf) {
            //limpa as mensagens de erro atuais


            //se cpf não for número, exibe o erro
            if (cpf.replace(/\D+/g, '') === '') {
                this.exibeErro('CPF Inválido', document.querySelector('.cpf'));
                //se não, converte em array o valor
            } else {
                const cpfLimpo = cpf.replace(/\D+/g, '');
                const cpfArr = Array.from(cpfLimpo);
                // Se o CPF informado é uma sequência, exibe o erro
                if (cpfLimpo[0].repeat(cpfLimpo.length) === cpfLimpo) {
                    this.exibeErro('CPF Inválido', document.querySelector('.cpf'));
                    // se não
                } else {
                    // se a qtde de números estiver errada, retorna erro, se não chama método que realizará o cálculo
                    if (cpfArr.length !== 11) {
                        this.exibeErro('CPF Inválido', document.querySelector('.cpf'))
                    } else {
                        let d1 = this.calculaDigito(1, cpfArr).toString();
                        let d2 = this.calculaDigito(2, cpfArr).toString();
                        if (d1 + d2 !== dgtColetado) {
                            this.exibeErro('CPF Inválido', document.querySelector('.cpf'));
                        } else {
                            this.cpf = Number(cpfArr[0] + cpfArr[1] + cpfArr[2] + cpfArr[3] + cpfArr[4] + cpfArr[5] + cpfArr[6] + cpfArr[7] + cpfArr[8] + cpfArr[9] + cpfArr[10])
                        }
                    }
                }
            }
        }
        calculaDigito(digito, cpfArr) {
            //armazenando os dígitos do CPF informados em string
            dgtColetado = cpfArr[9].toString() + cpfArr[10].toString()
            //calcular dígito 1
            let multiplicador = 10 + digito
            // retornar o cálculo de cada um dos 9 numeros do CPF
            const calculaDigitos = cpfArr.map((numero, indice) => {
                // se for o primeiro dígito
                if (digito === 1) {
                    // Se indice menor que 9(somente números antes dos dígitos)
                    if (indice < 9) {
                        // retorna a multiplicação de cada numero e o multiplicador
                        multiplicador--;
                        return Number(numero) * multiplicador;
                    };
                    // se número atual for o último, seta dígito para 2 para calcular o segundo dígito
                    if (indice === 11) digito = 2;
                    //retorna somente o próprio dígito
                    return Number(numero);
                    // se não(dígito for o segundo)
                } else {
                    // Se indice menor que 9(somente números antes dos dígitos)
                    if (indice < 9) {
                        // retorna a multiplicação de cada numero e o multiplicador
                        multiplicador--;
                        return Number(numero) * multiplicador;
                    };
                    //retorna somente os próprios dígito
                    return Number(numero);
                }
            });
            // retorna a soma de todos números calculados
            const total = calculaDigitos.reduce((ac, numero, indice) => {
                // Se o índice for menor que 9
                if (indice < 9) {
                    // retorna a soma do acumulador e número atual
                    return ac += Number(numero);
                };
                if (digito === 2 && indice === 9) {
                    return ac += dgtCalculado * 2
                } return ac;
            });
            //armazenar o dígito 1
            dgtCalculado = 11 - (total % 11);
            return dgtCalculado > 9 ? 0 : dgtCalculado;
        }
        exibeErro(msg, campo) {
            //se o erro foi no nome
            if (campo.classList.contains('nome')) {
                // exibe a mensagem de erro
                let p = document.createElement('p');
                let erro = document.createTextNode(msg);
                p.appendChild(erro);
                let user = document.querySelector('.nome');
                user.after(p);
                p.classList.add('erro');
            };
            //se o erro foi no sobrenome
            if (campo.classList.contains('sobrenome')) {
                // exibe a mensagem de erro
                let p = document.createElement('p');
                let erro = document.createTextNode(msg);
                p.appendChild(erro);
                let user = document.querySelector('.sobrenome');
                user.after(p);
                p.classList.add('erro');
            };
            //se o erro foi no CPF
            if (campo.classList.contains('cpf')) {
                // exibe a mensagem de erro
                let p = document.createElement('p');
                let erro = document.createTextNode(msg);
                p.appendChild(erro);
                let user = document.querySelector('.cpf');
                user.after(p);
                p.classList.add('erro');
            };
            //se o erro foi no usuário
            if (campo.classList.contains('user')) {
                // exibe a mensagem de erro
                let p = document.createElement('p');
                let erro = document.createTextNode(msg);
                p.appendChild(erro);
                let user = document.querySelector('.user');
                user.after(p);
                p.classList.add('erro');
            };
            //se o erro foi na Senha
            if (campo.classList.contains('pass')) {
                // exibe a mensagem de erro
                let p = document.createElement('p');
                let erro = document.createTextNode(msg);
                p.appendChild(erro);
                let user = document.querySelector('.pass');
                user.after(p);
                p.classList.add('erro');
            };
            //se o erro foi no Repetir Senha
            if (campo.classList.contains('rpass')) {
                // exibe a mensagem de erro
                let p = document.createElement('p');
                let erro = document.createTextNode(msg);
                p.appendChild(erro);
                let user = document.querySelector('.rpass');
                user.after(p);
                p.classList.add('erro');
            };
        };
    };

    // cria objeto
    const cadastroUsuario = new Usuario();


})()