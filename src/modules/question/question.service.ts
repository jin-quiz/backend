import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Question } from '@app/entities';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionsRepo: Repository<Question>,
  ) {}

  async getQuestions(): Promise<Question[]> {
    return this.questionsRepo.find();
  }

  async addQuestion(): Promise<Question> {
    return null;
  }
}
