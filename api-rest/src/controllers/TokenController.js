// importa jwt e model User
import jwt from 'jsonwebtoken';
import User from '../models/User';

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
    const user = await User.findOne({ where: { email } });

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
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      // configura o tempo de expiração
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    // retorna o token
    return res.json({ token });
  }
}

export default new TokenController();
