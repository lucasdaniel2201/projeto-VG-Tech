import { createApp } from './app.js';
import { logger } from './utils/logger.js';

/**
 * Bootstrap da aplicação.
 * Responsável apenas por iniciar o servidor HTTP.
 */
function bootstrap(): void {
  const app = createApp();
  const port = Number(process.env.PORT) || 3000;

  app.listen(port, () => {
    logger.info(`Servidor rodando em http://localhost:${port}`);
    logger.info(`Health check: http://localhost:${port}/health`);

    if (process.env.NODE_ENV !== 'production') {
      logger.info(`Documentação: http://localhost:${port}/docs`);
    }
  });
}

bootstrap();
