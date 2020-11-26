"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// setando o sequelize para conectar ao banco utilizando um determinado model
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
// importando configurações do bd
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
// importanto models
var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);
// criando array com todos os módulos
const models = [_Aluno2.default, _User2.default, _Photo2.default];

// criando conexão
const connection = new (0, _sequelize2.default)(_database2.default);
// itera cada model chamando o método 'init' enviando a conexão
models.forEach((model) => model.init(connection));
// itera cada model chamando os relacionamentos entre tabelas
// se o model possuir o método associate, executa todos os models que o possuírem
models.forEach((model) => model.associate && model.associate(connection.models));
