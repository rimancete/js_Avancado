import jwt from 'jsonwebtoken';
// importando model user
import User from '../models/User';

export default async (req, res, next) => {
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
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    // checa se id e email ainda são os mesmos dos armazenados em banco
    const user = await User.findOne({
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
