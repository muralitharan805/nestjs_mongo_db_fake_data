import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DriverHistoryModule } from './driver-history/driver-history.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/mqttDataBase'),
    DriverHistoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
