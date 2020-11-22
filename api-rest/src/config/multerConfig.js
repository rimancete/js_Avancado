// importando gravador de arquivos
import multer from 'multer';
import { extname, resolve } from 'path';

// previne arquivo de mesmo nome tentar ser salvo
const rand = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  // definindo tipos de arquivos que poderão ser salvos
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('O arquivo deve ser uma imagem PNG ou JPG.'));
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      // define local onde será salvo os arquivos estáticos (imagem)
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {
      // define o nome do arquivo com o milisegundo atual => '_' => um número aleatorio => e a extensão(mesma do arquivo original)
      cb(null, `${Date.now()}_${rand()}${extname(file.originalname)}`);
    },
  }),
};
