import { Column, Entity } from 'typeorm';

import { BaseEntity } from '@app/entities';

@Entity()
export class Stats extends BaseEntity {
  @Column()
  questionId: string;
}
