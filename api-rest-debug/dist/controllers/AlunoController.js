"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);

class AlunoController {
  // store
  async store(req, res) {
    try {
      const novoAluno = await _Aluno2.default.create(req.body);
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
      const alunos = await _Aluno2.default.findAll({
        // determinados atributos
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        // em ordem da id maior para menor de alunos seguido de id das fotos dos alunos
        order: [['id', 'DESC'], [_Photo2.default, 'id', 'DESC']],
        include: {
          model: _Photo2.default,
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
      const aluno = await _Aluno2.default.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [_Photo2.default, 'id', 'DESC']],
        include: {
          model: _Photo2.default,
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
      const aluno = await _Aluno2.default.findByPk(req.params.id);
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
      const aluno = await _Aluno2.default.findByPk(req.params.id);
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
exports. default = new AlunoController();
