import { Controller, Get } from '@nestjs/common';

import { User } from '@app/entities';

import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getGames(): Promise<User[]> {
    return this.userService.getUsers();
  }
}
