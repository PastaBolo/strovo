import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { Run } from './run';
import { RunsService } from './runs.service';

@Controller('runs')
export class RunsController {
  constructor(private runsService: RunsService) { }

  @Get()
  findAll() {
    return this.runsService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: number): Run {
    return this.runsService.find(id);
  }

  @Post()
  create(@Body() run: Run): Run {
    return this.runsService.create(run);
  }

  @Put()
  update(@Body() item: Run): Run {
    return this.runsService.update(item);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.runsService.delete(id);
  }
}
