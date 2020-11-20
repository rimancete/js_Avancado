import multer from 'multer';
// importanto configurações do multer
import multerConfig from '../config/multerConfig';

// importando model photo
import Photo from '../models/Photo';

// recebendo configurações do local de armazenamento
const upload = multer(multerConfig).single('photo');
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
        const photo = await Photo.create({ originalname, filename, aluno_id });
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

export default new PhotoController();
