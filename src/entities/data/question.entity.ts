import { BeforeInsert, Column, Entity } from 'typeorm';

import { BaseEntity } from '@app/entities';
import { QuestionCategory } from '@app/types/enums/question-category.enum';

@Entity()
export class Question extends BaseEntity {
  @Column({ type: 'enum', enum: QuestionCategory })
  category: QuestionCategory;

  @Column({ type: 'text' })
  text: string;

  @Column()
  timeToRead: number;

  @Column()
  answer: number;

  @Column({ type: 'text' })
  comment: string;

  @BeforeInsert()
  calculateTimeToRead() {
    this.timeToRead = this.text.length * 100 + 3000;
  }
}
