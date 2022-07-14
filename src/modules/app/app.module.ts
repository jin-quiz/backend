import { Module } from '@nestjs/common';

import {
  ConfigModule,
  DatabaseModule,
  GameModule,
  QuestionModule,
  UserModule,
} from '@app/modules';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    GameModule,
    QuestionModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
