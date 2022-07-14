import { Controller, Get } from '@nestjs/common';

import { Game } from '@app/entities';

import { GameService } from './game.service';

@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  async getGames(): Promise<Game[]> {
    return this.gameService.getGames();
  }
}
