//*** NEW criando model para a rota '/'
// *** NEW iniciando mongoose
const mongoose = require('mongoose');
// *** NEW criando schema(dados e regras para os dados)
const ContatoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    assunto: {type: String, required: true},
    msg: {type: String, required: true}
});
// *** NEW finalmente criando o model
const ContatoModel = mongoose.model('Contato', ContatoSchema);

// *** NEW exportando o model
module.exports = ContatoModel;