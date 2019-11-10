import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Run, Runs } from './run';

@Injectable()
export class RunsService {
  private readonly runs: Runs = {};

  findAll(): Runs {
    return this.runs;
  }

  find(id: number): Run {
    const run = this.runs[id];
    if (run) return run;
    else throw new Error('Run not found');
  }

  findByUser(userId: number): Run[] {
    return Object.values(this.runs).filter((run: Run) => run.userId === userId);
  }

  create(newRun: Run): Run {
    const id = new Date().valueOf();
    const run = { ...newRun, id };
    this.runs[id] = run;
    return run;
  }

  delete(id: number, userId: number) {
    const run = this.runs[id];
    if (run && run.userId === userId) delete this.runs[id];
    if (run && run.userId !== userId) throw new UnauthorizedException();
    else throw new Error('Delete : run not found');
  }
}
