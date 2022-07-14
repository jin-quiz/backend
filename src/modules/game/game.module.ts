import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Game } from '@app/entities';
import { UserModule } from '@app/modules/user';

import { GameController } from './game.controller';
import { GameService } from './game.service';

@Module({
  imports: [TypeOrmModule.forFeature([Game]), UserModule],
  controllers: [GameController],
  providers: [GameService],
  exports: [GameService],
})
export class GameModule {}
