import { Test, TestingModule } from '@nestjs/testing';
import { DriverHistoryService } from './driver-history.service';

describe('DriverHistoryService', () => {
  let service: DriverHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverHistoryService],
    }).compile();

    service = module.get<DriverHistoryService>(DriverHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
