import { Module } from '@nestjs/common';
import { Connection, Schema } from 'mongoose';

import { DatabaseModule } from '../database/database.module';
import { RunsController } from './runs.controller';
import { RunsService } from './runs.service';

@Module({
  imports: [DatabaseModule],
  controllers: [RunsController],
  providers: [
    RunsService,
    {
      provide: 'RunsModelToken',
      useFactory: (connection: Connection) =>
        connection.model('run', new Schema({
          id: { type: Number, required: true },
          userId: { type: Number, required: true },
          runType: { type: String, required: true },
          startDate: { type: String, required: true },
          endDate: { type: String, required: true },
          distance: { type: Number, required: true },
          calories: { type: Number, required: true },
        })),
      inject: ['DbConnectionToken'],
    },
  ],
  exports: [RunsService],
})
export class RunsModule { }
