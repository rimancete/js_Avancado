import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();
// importando index do database
import './database';

import express from 'express';
// ajustes para comunicação com React => permitindo quem pode acessar nossa api
import cors from 'cors';
import helmet from 'helmet';

import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import photoRoutes from './routes/photoRoutes';
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
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // utilizando cors e helmet
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    // setar pasta de arquivos estáticos
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/photos/', photoRoutes);
  }
}

export default new App().app;
