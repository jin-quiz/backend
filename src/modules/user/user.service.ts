import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { User } from '@app/entities';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    const res = await this.userRepo.find();
    return res;
  }

  async registerUser(): Promise<User> {
    return null;
  }
}
