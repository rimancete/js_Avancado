import Sequelize, { Model } from 'sequelize';
// importando bcrypt para inserir a senha do usuário ao hash na hr de salvar o dado
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      // Model para alimentação de dados na tabela alunos criada em migration
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo "nome" deve estar entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe',
        },
        validate: {
          isEmail: {
            args: [3, 255],
            msg: 'Email inválido',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      // criando campo que não está no db, que validará o preenchimento da senha e fará o hash da senha no db
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 20],
            msg: 'A senha deve ter entre 6 e 20 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });
    // colocando a senha do usuário no hash e salvando no bd
    this.addHook('beforeSave', async (user) => {
      // correção 'Illegal arguments: undefined, number => se receber a senha faz o hash
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });
    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
