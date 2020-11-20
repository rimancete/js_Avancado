// setando o sequelize para conectar ao banco utilizando um determinado model
import Sequelize, { ConnectionError } from 'sequelize';
// importando configurações do bd
import databaseConfig from '../config/database';
// importanto models
import Aluno from '../models/Aluno';
import User from '../models/User';
import Photo from '../models/Photo';
// criando array com todos os módulos
const models = [Aluno, User, Photo];

// criando conexão
const connection = new Sequelize(databaseConfig);
// itera cada model chamando o método 'init' enviando a conexão
models.forEach((model) => model.init(connection));
// itera cada model chamando os relacionamentos entre tabelas
// se o model possuir o método associate, executa todos os models que o possuírem
models.forEach((model) => model.associate && model.associate(connection.models));
