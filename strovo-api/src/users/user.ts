import { Run } from '../runs/run';

export interface User {
  readonly id: number;
  readonly username: string;
  readonly password: string;
}
