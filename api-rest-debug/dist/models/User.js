"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
// importando bcrypt para inserir a senha do usuário ao hash na hr de salvar o dado
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class User extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      // Model para alimentação de dados na tabela alunos criada em migration
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo "nome" deve ter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
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
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      // criando campo que não está no db, que validará o preenchimento da senha e fará o hash da senha no db
      password: {
        type: _sequelize2.default.VIRTUAL,
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
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8);
      }
    });
    return this;
  }

  passwordIsValid(password) {
    return _bcryptjs2.default.compare(password, this.password_hash);
  }
} exports.default = User;
