import { Global, Module } from '@nestjs/common';

import { ConfigService } from './config.service';
import { IAppConfig } from './interfaces';

@Global()
@Module({
  providers: [
    {
      provide: ConfigService,
      useFactory: async () => {
        const env = process.env.NODE_ENV;
        const config = (await import(`./environments/${env}`)) as {
          default: IAppConfig;
        };
        return new ConfigService(config.default);
      },
    },
  ],
  exports: [ConfigService],
})
export class ConfigModule {}
