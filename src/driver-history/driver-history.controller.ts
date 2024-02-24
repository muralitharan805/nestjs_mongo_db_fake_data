import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverHistoryService } from './driver-history.service';
import { CreateDriverHistoryDto } from './dto/create-driver-history.dto';
import { UpdateDriverHistoryDto } from './dto/update-driver-history.dto';
import { faker } from '@faker-js/faker';

@Controller('driver-history')
export class DriverHistoryController {
  constructor(private readonly driverHistoryService: DriverHistoryService) { }

  @Post()
  create(@Body() createDriverHistoryDto: CreateDriverHistoryDto) {

    this.driverHistoryService.create()
    return [];
  }

  @Get()
  findAll() {
    return this.driverHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverHistoryDto: UpdateDriverHistoryDto) {
    return this.driverHistoryService.update(+id, updateDriverHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverHistoryService.remove(+id);
  }
}
