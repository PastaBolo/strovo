import { Module } from '@nestjs/common';

import { RunsModule } from './runs/runs.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({ imports: [RunsModule, UsersModule, AuthModule] })
export class AppModule { }
