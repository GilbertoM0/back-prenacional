import { Test, TestingModule } from '@nestjs/testing';
import { EstadisticaBasquetService } from './estadistica_basquet.service';

describe('EstadisticaBasquetService', () => {
  let service: EstadisticaBasquetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstadisticaBasquetService],
    }).compile();

    service = module.get<EstadisticaBasquetService>(EstadisticaBasquetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
