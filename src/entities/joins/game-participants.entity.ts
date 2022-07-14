import { Column, Entity, ManyToOne } from 'typeorm';

import { BaseEntity, Game, User } from '@app/entities';

@Entity()
export class GameParticipants extends BaseEntity {
  @Column()
  gameId: string;

  @Column()
  userId: string;

  @Column()
  isWinner: boolean;

  @Column({ nullable: true })
  rank: number;

  @ManyToOne(() => Game, (game) => game.participants)
  game: Game;

  @ManyToOne(() => User, (user) => user.games)
  user: User;
}
