"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
// importanto configurações do multer
var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);

// importando model photo
var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);

// recebendo configurações do local de armazenamento
const upload = _multer2.default.call(void 0, _multerConfig2.default).single('photo');
class PhotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(401).json({
          errors: [err.code],
        });
      }

      try {
        // armazena os dados de foto do arquivo
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const photo = await _Photo2.default.create({ originalname, filename, aluno_id });
        const originalFile = photo.originalname;
        const destinyFile = photo.filename;
        const { url } = photo;
        return res.json({
          url, originalFile, destinyFile, aluno_id,
        });
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não encontrado'],
        });
      }
    });
  }
}

exports. default = new PhotoController();
