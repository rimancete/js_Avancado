"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
// importando model user
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

exports. default = async (req, res, next) => {
  // checando token => recebendo o header authorization
  const { authorization } = req.headers;
  // caso não tenhamos autho, retorna que o login é requeriso
  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }
  // coleta somente o token com split
  const [, token] = authorization.split(' ');
  // checa se o token é valido
  try {
    // recebe id e email do usuário após verificação do token e o secret que geramos
    const dados = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    // checa se id e email ainda são os mesmos dos armazenados em banco
    const user = await _User2.default.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido'],
      });
    }
    // seta userID e email com os dados coletados
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
