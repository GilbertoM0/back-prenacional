import { Test, TestingModule } from '@nestjs/testing';
import { BasquetballController } from './basquetball.controller';
import { BasquetballService } from './basquetball.service';

describe('BasquetballController', () => {
  let controller: BasquetballController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BasquetballController],
      providers: [BasquetballService],
    }).compile();

    controller = module.get<BasquetballController>(BasquetballController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
