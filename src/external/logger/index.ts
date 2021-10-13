import path from 'path';
import bunyan, { LogLevel } from 'bunyan';
import { Logger } from '@/contracts';
import { applicationEnv } from '@/app/config';
import { generateRandomFilename } from '@/shared';

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
        path: path.resolve(
          __dirname,
          '..',
          '..',
          '..',
          'logs',
          generateRandomFilename('json')
        ),
      },
    ],
    src: true,
  });
  return logger;
}

const logger = getLogger('HECTARE_MAPS_API');
export default logger;
