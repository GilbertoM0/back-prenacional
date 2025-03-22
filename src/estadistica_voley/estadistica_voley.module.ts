import { Module } from '@nestjs/common';
import { EstadisticaVoleyService } from './estadistica_voley.service';
import { EstadisticaVoleyController } from './estadistica_voley.controller';

@Module({
  controllers: [EstadisticaVoleyController],
  providers: [EstadisticaVoleyService],
})
export class EstadisticaVoleyModule {}
