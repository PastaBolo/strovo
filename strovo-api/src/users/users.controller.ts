import { Controller, Get, Param, Query, ParseIntPipe } from '@nestjs/common';

import { UsersService } from './users.service';
import { User } from './user';
import { RunsService } from '../runs/runs.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService, private runsService: RunsService) { }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  find(@Param('id', new ParseIntPipe()) id: number) {
    return this.usersService.find(id);
  }

  @Get('stats/:id')
  findStats(@Param('id', new ParseIntPipe()) userId: number, @Query() query) {
    return this.runsService.userStats(userId, { startDate: query.startDate, endDate: query.endDate });
  }
}
