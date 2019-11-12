import { Controller, Get, Post, Delete, Body, Param, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { Run } from './run';
import { RunsService } from './runs.service';

@Controller('runs')
export class RunsController {
  constructor(private runsService: RunsService) { }
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Request() req, @Body() run: Run) {
    return this.runsService.create({ ...run, userId: req.user.userId });
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  delete(@Request() req, @Param('id') id: number) {
    return this.runsService.delete(id, req.user.userId);
  }
}
