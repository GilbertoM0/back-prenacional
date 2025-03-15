import { Test, TestingModule } from '@nestjs/testing';
import { BasquetballService } from './basquetball.service';

describe('BasquetballService', () => {
  let service: BasquetballService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasquetballService],
    }).compile();

    service = module.get<BasquetballService>(BasquetballService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
