import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { paths } from './config/paths.js';
import router from './routes/index.js';
import { notFoundHandler } from './middlewares/not-found.js';
import { errorHandler } from './middlewares/error-handler.js';

/**
 * Cria e configura a aplicação Express.
 * Separada do bootstrap (server.ts) para facilitar testes.
 */
export function createApp(): express.Application {
  const app = express();

  // -------------------------------------------
  // Middlewares globais
  // -------------------------------------------
  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Logs HTTP (formato dev no ambiente dev, combined em produção)
  app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

  // Arquivos estáticos (landing page em public/)
  app.use(express.static(paths.public));

  // -------------------------------------------
  // Rotas da API
  // -------------------------------------------
  app.use('/', router);

  // -------------------------------------------
  // Handlers de erro (DEVEM ser os últimos)
  // -------------------------------------------
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
