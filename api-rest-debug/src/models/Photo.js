import Sequelize, { Model } from 'sequelize';
// importando appConfig
import appConfig from '../config/appConfig';

export default class Photo extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Nome origem do arquivo precisa ter valor',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Nome destino do arquivo precisa ter valor',
          },
        },
      },
      // setar url para acesso à arquivos estáticos (imagem)
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue('filename')}`;
        },
      },
    }, {
      sequelize,
      tableName: 'photos',
    });
    return this;
  }

  // relacionando photo com aluno => photo pertence ao aluno
  static associate(models) {
    // this pertence ao model Aluno na FK
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
