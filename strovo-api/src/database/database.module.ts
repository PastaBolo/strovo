import { Module } from '@nestjs/common';
import * as mongoose from 'mongoose';

const DATABASE_PROVIDER = {
  provide: 'DbConnectionToken',
  useFactory: async (): Promise<typeof mongoose> =>
    await mongoose.connect(
      'mongodb://strovo-admin:strovotheodo75@ds345028.mlab.com:45028/strovo',
      { useNewUrlParser: true, useUnifiedTopology: true },
    ),
};

@Module({
  providers: [DATABASE_PROVIDER],
  exports: [DATABASE_PROVIDER],
})
export class DatabaseModule { }
