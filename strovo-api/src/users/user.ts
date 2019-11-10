import { Run } from '../runs/run';

export interface User {
  readonly id: number;
  readonly username: string;
}

export interface Users {
  [id: number]: User;
}
