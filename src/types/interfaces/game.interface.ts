import { User } from '@app/entities';

export interface IGame {
  id: string;
  date: string;
  participants: User[];
}
