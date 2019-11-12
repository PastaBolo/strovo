import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { Model } from 'mongoose';

import { Run, RunTypes } from './run';

@Injectable()
export class RunsService {
  constructor(@Inject('RunsModelToken') private readonly RunModel: Model<Run>) { }

  async userStats(userId: number, { startDate, endDate }: { startDate?: string, endDate?: string }) {
    const averageStats = runs => ({
      averageDistance: runs.reduce((total, run) => total + run.distance, 0) / runs.length,
      averageCalories: runs.reduce((total, run) => total + run.calories, 0) / runs.length,
    });

    const userRuns = await this.RunModel.find({
      userId,
      ...(startDate && { startDate: { $gte: startDate } }),
      ...(endDate && { endDate: { $lte: endDate } }),
    });
    let userStats = {};

    Object.entries(RunTypes).forEach(([key, runType]) => {
      userStats = { ...userStats, [key]: averageStats(userRuns.filter((run: Run) => run.runType === runType)) };
    });

    return userStats;
  }

  async create(newRun: Run) {
    if (newRun.startDate >= newRun.endDate) throw new BadRequestException('startDate must be before endDate');
    return await new this.RunModel({ ...newRun, id: new Date().valueOf() }).save();
  }

  async delete(id: number, userId: number) {
    return await this.RunModel.deleteOne({ id, userId });
  }
}
