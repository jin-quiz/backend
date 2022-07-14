import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { ConfigService } from '@app/modules/config';

export const buildConnection = async (
  configService?: ConfigService,
): Promise<TypeOrmModuleOptions> => {
  const params: TypeOrmModuleOptions = configService.config.database;
  return params;
};
