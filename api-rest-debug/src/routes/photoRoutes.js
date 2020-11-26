import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

// importando multer

import photoController from '../controllers/PhotoController';

const router = new Router();

// criando rota com envio do upload.single(nome do multipart form que definimos), antes do controller em si, similar ao middleware
router.post('/', loginRequired, photoController.store);

export default router;
