import { Test, TestingModule } from '@nestjs/testing';
import { EstadisticaFutbolController } from './estadistica_futbol.controller';
import { EstadisticaFutbolService } from './estadistica_futbol.service';

describe('EstadisticaFutbolController', () => {
  let controller: EstadisticaFutbolController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadisticaFutbolController],
      providers: [EstadisticaFutbolService],
    }).compile();

    controller = module.get<EstadisticaFutbolController>(EstadisticaFutbolController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
