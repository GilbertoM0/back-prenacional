import { Test, TestingModule } from '@nestjs/testing';
import { EstadisticaVoleyService } from './estadistica_voley.service';

describe('EstadisticaVoleyService', () => {
  let service: EstadisticaVoleyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstadisticaVoleyService],
    }).compile();

    service = module.get<EstadisticaVoleyService>(EstadisticaVoleyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
