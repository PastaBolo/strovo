import { Injectable } from '@nestjs/common';
import { User, Users } from './user';

@Injectable()
export class UsersService {
  private readonly users: Users = {
    1: { id: 1, username: 'John' },
    2: { id: 2, username: 'Jack' },
    3: { id: 3, username: 'Ema' },
  };

  findAll(): Users {
    return this.users;
  }

  find(id: number): User {
    const user = this.users[id];
    if (user) return user;
    else throw new Error('Run not found');
  }
}
