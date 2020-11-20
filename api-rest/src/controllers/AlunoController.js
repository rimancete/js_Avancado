import Aluno from '../models/Aluno';
import Photo from '../models/Photo';

class AlunoController {
  // store
  async store(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body);
      const {
        id, nome, email, idade, peso,
      } = novoAluno;
      return res.json({
        id, nome, email, idade, peso,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // index
  async index(req, res) {
    try {
      // exibindo todos os alunos
      const alunos = await Aluno.findAll({
        // determinados atributos
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        // em ordem da id maior para menor de alunos seguido de id das fotos dos alunos
        order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
        include: {
          model: Photo,
          // exibe apenas os nomes dos arquivos
          attributes: ['url', 'originalname', 'filename'],
        },
      });
      return res.json(alunos);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Informe o ID do aluno'],
        });
      }
      const aluno = await Aluno.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
        include: {
          model: Photo,
          // exibe apenas os nomes dos arquivos
          attributes: ['url', 'originalname', 'filename'],
        },
      });
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não encontrado'],
        });
      }
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Informe o ID do aluno a ser alterado'],
        });
      }
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não encontrado'],
        });
      }

      const alunoAtualizado = await aluno.update(req.body);
      const {
        id, nome, email, idade, peso, altura,
      } = alunoAtualizado;

      return res.json({
        id, nome, email, idade, peso, altura,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Informe o ID do aluno a ser excluido'],
        });
      }
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não encontrado'],
        });
      }
      await aluno.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}
export default new AlunoController();
