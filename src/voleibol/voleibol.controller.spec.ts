import { Test, TestingModule } from '@nestjs/testing';
import { VoleibolController } from './voleibol.controller';
import { VoleibolService } from './voleibol.service';

describe('VoleibolController', () => {
  let controller: VoleibolController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VoleibolController],
      providers: [VoleibolService],
    }).compile();

    controller = module.get<VoleibolController>(VoleibolController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
