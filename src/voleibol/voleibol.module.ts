import { Module } from '@nestjs/common';
import { VoleibolService } from './voleibol.service';
import { VoleibolController } from './voleibol.controller';

@Module({
  controllers: [VoleibolController],
  providers: [VoleibolService],
})
export class VoleibolModule {}
