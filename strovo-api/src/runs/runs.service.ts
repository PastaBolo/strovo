import { Injectable } from '@nestjs/common';
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

  create(newRun: Run): Run {
    const id = new Date().valueOf();
    const run = { ...newRun, id };
    this.runs[id] = run;
    return run;
  }

  update(updatedRun: Run): Run {
    if (this.runs[updatedRun.id]) {
      this.runs[updatedRun.id] = updatedRun; return updatedRun;
    } else {
      throw new Error('Update : run not found');
    }
  }

  delete(id: number) {
    const run = this.runs[id];
    if (run) delete this.runs[id];
    else throw new Error('Delete : run not found');
  }
}
