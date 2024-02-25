import { Injectable } from '@nestjs/common';
import { CreateDriverHistoryDto } from './dto/create-driver-history.dto';
import { UpdateDriverHistoryDto } from './dto/update-driver-history.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { driverHistoryCollection } from './schema/driver-history';

@Injectable()
export class DriverHistoryService {

  intervelId
  stopIntervel = 0
  bulkInsert() {
    this.stopIntervel++
    const start_date: any = new Date()
    console.log('Bulk insert started...');
    const driverHistories = [];
    for (let index = 0; index < 100000; index++) {
      const driverHistory = new CreateDriverHistoryDto()
      driverHistories.push({ insertOne: { document: { driverHistory } } });
    }
    try {
      this.driverHistoryCollection.bulkWrite(driverHistories)
    } catch (error) {
      clearInterval(this.intervelId)
    }

    driverHistoryCollection
    const end_date: any = new Date()
    const total_time_take = end_date - start_date
    console.log((total_time_take / 1000) + ' Bulk insert completed.');
  }
  constructor(@InjectModel(driverHistoryCollection.name) private driverHistoryCollection: Model<driverHistoryCollection>) { }
  create() {
    // setTimeout(() => {
    //   this.intervelId = setInterval(this.bulkInsert.bind(this), 30000)
    // }, 0);
    const driverHistories = [];
    for (let index = 0; index < 100000; index++) {
      const driverHistory = new CreateDriverHistoryDto()
      driverHistories.push({ insertOne: { document: driverHistory } });
    }
    this.driverHistoryCollection.bulkWrite(driverHistories)

  }

  async findAll(): Promise<driverHistoryCollection[]> {
    return this.driverHistoryCollection.find().exec();
  }





  findOne(id: number) {
    return `This action returns a #${id} driverHistory`;
  }

  update(id: number, updateDriverHistoryDto: UpdateDriverHistoryDto) {
    return `This action updates a #${id} driverHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} driverHistory`;
  }
}
