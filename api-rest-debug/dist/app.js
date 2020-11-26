"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();
// importando index do database
require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
// ajustes para comunicação com React => permitindo quem pode acessar nossa api
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);

var _homeRoutes = require('./routes/homeRoutes'); var _homeRoutes2 = _interopRequireDefault(_homeRoutes);
var _userRoutes = require('./routes/userRoutes'); var _userRoutes2 = _interopRequireDefault(_userRoutes);
var _tokenRoutes = require('./routes/tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
var _alunoRoutes = require('./routes/alunoRoutes'); var _alunoRoutes2 = _interopRequireDefault(_alunoRoutes);
var _photoRoutes = require('./routes/photoRoutes'); var _photoRoutes2 = _interopRequireDefault(_photoRoutes);
// lista de domínios permitidos
const whiteList = [
  'https://react2.otaviomiranda.com.br',
  'http://localhost:3000',
];
// configurações do cors => origin site origem que está tentando acessar nossa api(permitidos em nossa whitelist)
const corsOptions = {
  origin(origin, callback) {
    // se a origem tiver algum valor da whiteList ou não for preenchida
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
      // se n~ao for domínio permitido
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // utilizando cors e helmet
    this.app.use(_cors2.default.call(void 0, corsOptions));
    this.app.use(_helmet2.default.call(void 0, ));
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    // setar pasta de arquivos estáticos
    this.app.use('/images/', _express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', _homeRoutes2.default);
    this.app.use('/users/', _userRoutes2.default);
    this.app.use('/tokens/', _tokenRoutes2.default);
    this.app.use('/alunos/', _alunoRoutes2.default);
    this.app.use('/photos/', _photoRoutes2.default);
  }
}

exports. default = new App().app;
