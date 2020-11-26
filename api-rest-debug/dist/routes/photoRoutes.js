"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

// importando multer

var _PhotoController = require('../controllers/PhotoController'); var _PhotoController2 = _interopRequireDefault(_PhotoController);

const router = new (0, _express.Router)();

// criando rota com envio do upload.single(nome do multipart form que definimos), antes do controller em si, similar ao middleware
router.post('/', _loginRequired2.default, _PhotoController2.default.store);

exports. default = router;
