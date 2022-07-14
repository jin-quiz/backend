import { QuestionCategory } from '@app/types/enums';

import { IQuizElement } from './quiz-element.interface';
import { IStatCounter } from './stat-counter.interface';

export interface IQuestion {
  id: string;
  category: QuestionCategory;
  quiz: IQuizElement;
  stats: IStatCounter;
}
