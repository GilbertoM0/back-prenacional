import { Test, TestingModule } from '@nestjs/testing';
import { EstadisticaBasquetController } from './estadistica_basquet.controller';
import { EstadisticaBasquetService } from './estadistica_basquet.service';

describe('EstadisticaBasquetController', () => {
  let controller: EstadisticaBasquetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadisticaBasquetController],
      providers: [EstadisticaBasquetService],
    }).compile();

    controller = module.get<EstadisticaBasquetController>(EstadisticaBasquetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
