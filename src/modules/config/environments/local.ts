import * as fs from 'fs';
import * as path from 'path';

import { IAppConfig } from '../interfaces';

export default {
  application: {
    port: 3333,
    version: (
      JSON.parse(
        fs.readFileSync(
          path.resolve(process.env.APP_ROOT, 'package.json'),
          'utf8',
        ),
      ) as {
        version: string;
      }
    ).version,
  },
  logging: {
    level: 'debug',
    pretty: true,
    autolog: false,
  },
  JWT: {
    accessLifetime: '10m',
    refreshLifetime: '60d',
    secret: 'IbelieveIcanfly',
  },
  database: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'quizmaster',
    password: 'pgsecret',
    database: 'pgquiz',
    synchronize: true,
    entities: [
      path.join(process.env.APP_ROOT, 'dist/entities/**/*entity{.ts,.js}'),
    ],
    retryAttempts: 3,
    retryDelay: 5000,
    verboseRetryLog: true,
  },
} as IAppConfig;
