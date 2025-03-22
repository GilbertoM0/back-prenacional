import { Test, TestingModule } from '@nestjs/testing';
import { EstadisticaVoleyController } from './estadistica_voley.controller';
import { EstadisticaVoleyService } from './estadistica_voley.service';

describe('EstadisticaVoleyController', () => {
  let controller: EstadisticaVoleyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadisticaVoleyController],
      providers: [EstadisticaVoleyService],
    }).compile();

    controller = module.get<EstadisticaVoleyController>(EstadisticaVoleyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
