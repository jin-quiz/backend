import { Controller, Get } from '@nestjs/common';

import { Question } from '@app/entities';

import { QuestionService } from './question.service';

@Controller('questions')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get()
  async getQuestions(): Promise<Question[]> {
    return this.questionService.getQuestions();
  }
}
