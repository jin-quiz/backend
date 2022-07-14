import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Stats } from '@app/entities';

@Injectable()
export class StatsService {
  constructor(@InjectRepository(Stats) private statsRepo: Repository<Stats>) {}

  async getStats(questionId: string): Promise<Stats> {
    return this.statsRepo.findOne({ where: { questionId } });
  }
}
