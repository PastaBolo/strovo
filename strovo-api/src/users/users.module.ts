import { Module } from '@nestjs/common';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { RunsModule } from 'src/runs/runs.module';

@Module({
  imports: [RunsModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule { }
