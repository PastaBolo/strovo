import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

import { User } from './user';

@Injectable()
export class UsersService {
  constructor(@Inject('UsersModelToken') private readonly UserModel: Model<User>) { }

  async findAll(): Promise<User[]> {
    const users = await this.UserModel.find();
    return users.map(user => user.toJSON()).map(({ password, ...result }) => result);
  }

  async find(id: number): Promise<User> {
    const user = await this.UserModel.findOne({ id });
    if (user) {
      const { password, ...result } = user.toJSON();
      return result;
    } else throw new Error('Run not found');
  }

  async findByUsername(username: string) {
    return await this.UserModel.findOne({ username });
  }
}
