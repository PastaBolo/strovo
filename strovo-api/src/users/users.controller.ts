import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

import { UsersService } from './users.service';
import { User } from './user';
import { RunsService } from '../runs/runs.service';
import { Run } from '../runs/run';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService, private runsService: RunsService) { }

  @Get()
  findAll(): User[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: number): User {
    return this.usersService.find(id);
  }

  @Get('stats/:id')
  findStats(@Param('id', new ParseIntPipe()) userId: number): Run[] {
    return this.runsService.findByUser(userId);
  }
}
