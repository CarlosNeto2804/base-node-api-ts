import morgan from 'morgan';
import helmet from 'helmet';
import { applicationEnv } from '../config';
import { validateOrigin } from './validate-cors';
import { validateMethod } from './validate-request-method';
import { Application, json, urlencoded } from 'express';

function register(app: Application) {
  app.use(helmet());
  app.use(validateOrigin(applicationEnv.cors.allowedOrigin));
  app.use(validateMethod(applicationEnv.cors.allowedMethods));
  app.use(json({ limit: applicationEnv.server.requestBodySize }));
  app.use(urlencoded({ limit: applicationEnv.server.requestBodySize }));
  app.use(morgan(applicationEnv.logger.morganFormat));
}

export default { register };
