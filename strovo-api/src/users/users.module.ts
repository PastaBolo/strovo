import { Module } from '@nestjs/common';
import { Connection, Schema } from 'mongoose';

import { DatabaseModule } from '../database/database.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { RunsModule } from '../runs/runs.module';

@Module({
  imports: [RunsModule, DatabaseModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'UsersModelToken',
      useFactory: (connection: Connection) =>
        connection.model('user', new Schema({
          username: { type: String, required: true, unique: true },
          password: { type: String, required: true },
        })),
      inject: ['DbConnectionToken'],
    },
  ],
  exports: [UsersService],
})
export class UsersModule { }
