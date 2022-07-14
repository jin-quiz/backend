import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule, ConfigService } from '@app/modules/config';

import { buildConnection } from './connection.builder';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        buildConnection(configService),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
