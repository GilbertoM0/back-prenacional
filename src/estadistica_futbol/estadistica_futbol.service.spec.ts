import { Test, TestingModule } from '@nestjs/testing';
import { EstadisticaFutbolService } from './estadistica_futbol.service';

describe('EstadisticaFutbolService', () => {
  let service: EstadisticaFutbolService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstadisticaFutbolService],
    }).compile();

    service = module.get<EstadisticaFutbolService>(EstadisticaFutbolService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
