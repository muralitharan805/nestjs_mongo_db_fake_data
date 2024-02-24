import { Module } from '@nestjs/common';
import { DriverHistoryService } from './driver-history.service';
import { DriverHistoryController } from './driver-history.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { driverHistoryCollection, driverHistoryCollectionSchema } from './schema/driver-history';

@Module({
  imports: [MongooseModule.forFeature([{ name: driverHistoryCollection.name, schema: driverHistoryCollectionSchema }])],
  controllers: [DriverHistoryController],
  providers: [DriverHistoryService],
})
export class DriverHistoryModule { }
