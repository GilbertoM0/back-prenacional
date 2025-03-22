import { Module } from '@nestjs/common';
import { EstadisticaFutbolService } from './estadistica_futbol.service';
import { EstadisticaFutbolController } from './estadistica_futbol.controller';

@Module({
  controllers: [EstadisticaFutbolController],
  providers: [EstadisticaFutbolService],
})
export class EstadisticaFutbolModule {}
