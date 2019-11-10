import { Module } from '@nestjs/common';
import { RunsModule } from './runs/runs.module';
import { UsersModule } from './users/users.module';

@Module({ imports: [RunsModule, UsersModule] })
export class AppModule { }
