import { Test, TestingModule } from '@nestjs/testing';
import { VoleibolService } from './voleibol.service';

describe('VoleibolService', () => {
  let service: VoleibolService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VoleibolService],
    }).compile();

    service = module.get<VoleibolService>(VoleibolService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
