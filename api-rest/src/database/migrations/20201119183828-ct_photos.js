module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('photos', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    originalname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    filename: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    // relacionando id do aluno com a foto
    aluno_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      // tabela origem
      references: {
        model: 'alunos',
        key: 'id',
      },
      // definir o que acontece com as fotos(registros) desse aluno
      // Ao deletar => CASCADE para apagar as fotos do aluno | SET NULL para desreferenciar a foto do aluno excluído
      onDelete: 'CASCADE',
      // Ao atualizar os dados do aluno(incluindo o id) => CASCADE para relacionar as fotos ao novo id | SET NULL para desreferenciar a foto do aluno excluído
      onUpdate: 'CASCADE',

    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('photos'),
};
