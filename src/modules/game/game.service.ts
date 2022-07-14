import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Game } from '@app/entities';
import { UserService } from '@app/modules/user';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game) private readonly gameRepo: Repository<Game>,
    @Inject(UserService) private readonly userService: UserService,
  ) {}

  async getGames(): Promise<Game[]> {
    const res = await this.gameRepo.find();
    return res;
  }

  async setupGame(): Promise<Game> {
    return null;
  }

  async addParticipant(): Promise<string> {
    this.userService.registerUser();
    return 'ok';
  }

  async updateGame(): Promise<Game> {
    return null;
  }
}
