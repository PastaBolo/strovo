import { IsNumber, IsPositive, IsEnum, IsDateString, IsOptional } from 'class-validator';

export enum RunTypes {
  Walk = 'Walk',
  Run = 'Run',
  Bike = 'Bike',
}

export class Run {
  @IsNumber() @IsOptional() readonly id: number;
  @IsNumber() @IsOptional() readonly userId: number;
  @IsEnum(RunTypes) readonly runType: RunTypes;
  @IsDateString() readonly startDate: string;
  @IsDateString() readonly endDate: string;
  @IsPositive() readonly distance: number;
  @IsPositive() readonly calories: number;
}

export interface Runs {
  [id: number]: Run;
}
