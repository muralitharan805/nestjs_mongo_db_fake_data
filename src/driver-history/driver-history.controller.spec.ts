import { Test, TestingModule } from '@nestjs/testing';
import { DriverHistoryController } from './driver-history.controller';
import { DriverHistoryService } from './driver-history.service';

describe('DriverHistoryController', () => {
  let controller: DriverHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverHistoryController],
      providers: [DriverHistoryService],
    }).compile();

    controller = module.get<DriverHistoryController>(DriverHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
