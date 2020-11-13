//*** NEW criando model para a rota '/'
// *** NEW iniciando mongoose
const mongoose = require('mongoose');
// importando validator
const validator = require('validator')
// *** NEW criando schema(dados e regras para os dados)
const ContatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: false, default: '' },
    cel: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    idUser: { type: String, required: false },
    criadoEm: { type: Date, default: Date.now },
},
    { collection: 'contatos' }
);
// *** NEW finalmente criando o model
const ContatoModel = mongoose.model('Contato', ContatoSchema);
// tratativa de dados em arrow function
function Contato(body, idUser) {
    this.body = body;
    this.user = idUser
    this.errors = [];
    this.contato = null;

}
// criando método que valida e cadastra o contato em async(por se tratar de gravação em bd)
Contato.prototype.cadastro = async function () {
    this.valida();
    // checa se há erros e não permite a gravação dos dados no bd
    if (this.errors.length > 0) return;
    // retorna para a chave contato, a criação do contato em await
    this.contato = await ContatoModel.create(this.body);
};
//método de 'Contato'
Contato.prototype.valida = function () {
    // chama método que percorre cada chave e valida se todos os valores são strings
    this.cleanUp();
    // nome precisa ser preenchido
    if (!this.body.nome) this.errors.push('Nome precisa ser preenchido');
    // Cel ou email precisa ser enviado
    if (!this.body.email && !this.body.cel) this.errors.push('Email ou telefone deve ser preenchido');
    // E-mail precisa ser válido
    if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('Email inválido');
}
//método de 'Contato'
Contato.prototype.cleanUp = function () {
    for (let key in this.body) {
        if (typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }
    // garantir que tenhamos somente os campos necessários para validação do model(excluindo outros dados como csrf token)
    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        cel: this.body.cel,
        email: this.body.email,
        idUser: this.user
    }
}
//edição
Contato.prototype.edit = async function (id) {
    // verifica se o Id não for string não realiza a busca e edição
    if (typeof id !== 'string') return;
    // realiza as validações
    this.valida()
    // checa se há erros e não permite a gravação dos dados no bd
    if (this.errors.length > 0) return;
    /* retorna para a chave contato, o método que localiza o contato pelo id
    e edita-o, em await
    */
    this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true });
}

//método estático, não atrelado ao prototype
//método que recebe id do contatoCtronller, localizando o contato por ele
Contato.buscaPorId = async function (id) {
    // verifica se o Id não for string não realiza a busca
    if (typeof id !== 'string') return;
    // localiza o id do usuário no bd e o salva na chave 'id'
    const contato = await ContatoModel.findById(id)
    return contato;
}

//lista contato ordenado por data
Contato.buscaContatos = async function (userEmail) {
    // localiza o usuário
    const contatos = await ContatoModel.find({idUser: userEmail})
        .sort({ criadoEm: -1 })
    return contatos;
}
Contato.delete = async function (id) {
    // verifica se o Id não for string não realiza a busca e edição
    if (typeof id !== 'string') return;
    // localiza o usuário pelo id e o deleta
    const contato = await ContatoModel.findByIdAndDelete({_id: id})
    return contato;
}


// *** NEW exportando o model
module.exports = Contato;