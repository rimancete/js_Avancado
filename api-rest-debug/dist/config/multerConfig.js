"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// importando gravador de arquivos
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path');

// previne arquivo de mesmo nome tentar ser salvo
const rand = () => Math.floor(Math.random() * 10000 + 10000);

exports. default = {
  // definindo tipos de arquivos que poderão ser salvos
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new _multer2.default.MulterError('O arquivo deve ser uma imagem PNG ou JPG.'));
    }
    return cb(null, true);
  },
  storage: _multer2.default.diskStorage({
    destination: (req, file, cb) => {
      // define local onde será salvo os arquivos estáticos (imagem)
      cb(null, _path.resolve.call(void 0, __dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {
      // define o nome do arquivo com o milisegundo atual => '_' => um número aleatorio => e a extensão(mesma do arquivo original)
      cb(null, `${Date.now()}_${rand()}${_path.extname.call(void 0, file.originalname)}`);
    },
  }),
};
