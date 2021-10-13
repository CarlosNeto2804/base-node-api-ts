import { Application } from 'express';
import { applicationEnv } from './config';
import domains from '@/domains';
import middlewares from './middlewares';
import logger from '@/external/logger';

function buildApi(app: Application) {
  middlewares.register(app);
  domains.register(app);
  app.listen(applicationEnv.server.port, () => {
    logger.info('Application Running');
  });
}

export default { buildApi };
