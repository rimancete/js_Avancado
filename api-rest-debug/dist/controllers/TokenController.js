"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// importa jwt e model User
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class TokenController {
  // criando o token
  async store(req, res) {
    // recebe email e senha do req e os valida
    const { email = '', password = '' } = req.body;
    if (!email || !password) {
      res.status(401).json({
        errors: ['Credênciais inválidas'],
      });
    }
    const user = await _User2.default.findOne({ where: { email } });

    if (!user) {
      res.status(401).json({
        errors: ['Usuário não existe'],
      });
    }
    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha inválida'],
      });
    }
    // recebe o id do usuário
    const { id } = user;
    // gera token informando id, email, validando com o TOKEN_SECRET do .env
    const token = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
      // configura o tempo de expiração
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    // retorna o token e dados do usuário
    return res.json({ token, user: { nome: user.nome, id, email } });
  }
}

exports. default = new TokenController();
