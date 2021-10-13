import path from 'path';
import { Logger } from '@/contracts';
import bunyan, { LogLevel } from 'bunyan';
import { applicationEnv } from '@/app/config';

const level = applicationEnv.logger.logLevel as unknown as LogLevel;

export function getLogger(name = ''): Logger {
  const logger = bunyan.createLogger({
    name,
    level,
    streams: [
      {
        level,
        stream: process.stdout,
      },
      {
        level,
        path: path.resolve(__dirname, '..', '..', '..', 'logs', 'logs.json'),
      },
    ],
    src: true,
  });
  return logger;
}

const logger = getLogger('HECTARE_MAPS_API');
export default logger;
