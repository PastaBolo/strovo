import { IsNumber, IsEnum, IsDateString, IsOptional } from 'class-validator';

export enum RunType { Walk, Run, Bike }

export class Run {
  @IsNumber() @IsOptional() readonly id: number;
  @IsNumber() @IsOptional() readonly userId: number; // TODO Create an interface and remove userId from this class
  @IsEnum(RunType) readonly runType: RunType;
  @IsDateString() readonly startDate: Date;
  @IsDateString() readonly endDate: Date;
  @IsNumber() readonly distance: number;
  @IsNumber() readonly calories: number;
}

export interface Runs {
  [id: number]: Run;
}
