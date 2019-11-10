import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    { id: 1, username: 'John', password: 'p4ssw0rd' },
    { id: 2, username: 'Jack', password: 'p4ssw0rd' },
    { id: 3, username: 'Ema', password: 'p4ssw0rd' },
  ];

  findAll(): User[] {
    return this.users;
  }

  find(id: number): User {
    const user = this.users[id];
    if (user) return user;
    else throw new Error('Run not found');
  }

  findByUsername(username: string) {
    return this.users.find(user => user.username === username);
  }
}
