// criando model para a rota '/'
// iniciando mongoose
const mongoose = require('mongoose');
// NEW *** importando validator
const validator = require('validator')
// NEW *** importando bcrypt
const bcryptjs = require('bcryptjs')
// criando schema(dados e regras para os dados)
const SignupSchema = new mongoose.Schema({
    email: { type: String, required: true },
    nome: { type: String, required: true },
    sobrenome: { type: String, required: true },
    cel: { type: String },
    pass: { type: String, required: true }

},
    { collection: 'users' }
);
// criando o model
const SignupModel = mongoose.model('Signup', SignupSchema);

//tratando os dados
class Signup {
    constructor(body) {
        this.body = body;
        //flag de erros
        this.errors = [];
        //salva sessão
        this.user = null;
    }
    // TODA OPERAÇÃO DE BD TRABALHAMOS COM PROMISE(ASYNC E AWAIT)
    // criando método para login do usuário
    async signin() {
        // chama método que limpa e valida os dados
        this.validaSignin();
        // checa se há erros e não permite a gravação dos dados no bd
        if (this.errors.length > 0) return;
        // localiza o usuário no bd e o salva na chave 'user'
        this.user = await SignupModel.findOne({ email: this.body.email });
        // se usuário não existir, adiciona erro
        if (!this.user) {
            this.errors.push('Usuário não existe. Cadastre-se já!');
            return;
        }
        // validar a senha decriptando e comparando com a senha armazenada no bd
        if (!bcryptjs.compareSync(this.body.pass, this.user.pass)){
            this.errors.push('Senha inválida');
            this.user = null;
            return;
        }


    }

    async register() {
        // chama método que limpa e valida os dados
        this.validaSignup();
        // checa se há erros e não permite a gravação dos dados no bd
        if (this.errors.length > 0) return;
        //excluir a chave de repetir senha que não é mais necessária
        delete this.body.rpass;
        //checa se usuário existe
        await this.userExists()
        // checa se há erros e não permite a gravação dos dados no bd
        if (this.errors.length > 0) return;

        // NEW *** adicionando hash a senha =>
        // criando salt
        const salt = bcryptjs.genSaltSync();
        // adicionando salt à senha;
        this.body.pass = bcryptjs.hashSync(this.body.pass, salt)

        //armazenando os dados => chama o model passando o body já validado
        this.user = await SignupModel.create(this.body);

    }
    async userExists() {
        // verifica se existe um email de mesmo valor que a key do body
        this.user = await SignupModel.findOne({ email: this.body.email });
        if (this.user) this.errors.push('Usuário já existe');
    }

    validaSignup() {
        // chama método que percorre cada chave e valida se todos os valores são strings
        this.cleanUp();
        // E-mail precisa ser preenchido e válido
        if (!validator.isEmail(this.body.email)) this.errors.push('Email inválido');
        // Nome precisa ser preenchido
        if (!this.body.nome) this.errors.push('Nome precisa ser preenchido');
        // Sobrenome precisa ser preenchido
        if (!this.body.sobrenome) this.errors.push('Sobrenome precisa ser preenchido');
        // senha precisa ter entre 6 e 20 caracteres
        if (this.body.pass.length < 6 || this.body.pass.length > 20) this.errors.push('A senha precisa ter entre 6 e 20 caracteres');
        // repetir senha precisa ter entre 6 e 20 caracteres
        if (this.body.rpass.length < 6 || this.body.rpass.length > 20) this.errors.push(`Campo "Repetir Senha" precisa ter entre 6 e 20 caracteres`);
        // senha e repetir senha precisam ser iguais
        if (this.body.pass !== this.body.rpass) this.errors.push('As senhas devem ser iguais');
    }
    validaSignin(){
        // chama método que percorre cada chave e valida se todos os valores são strings
        this.cleanUp();
        // E-mail precisa ser preenchido e válido
        if (!validator.isEmail(this.body.email)) this.errors.push('Email inválido');
    }
    cleanUp() {
        for (let key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }
        // garantir que tenhamos somente os campos necessários para validação do model(excluindo outros dados como csrf token)
        this.body = {
            email: this.body.email,
            nome: this.body.nome,
            sobrenome: this.body.sobrenome,
            cel: this.body.cel,
            pass: this.body.pass,
            rpass: this.body.rpass
        }
    }
}

// exportando o model
module.exports = Signup;