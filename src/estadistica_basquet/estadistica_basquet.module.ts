import { Module } from '@nestjs/common';
import { EstadisticaBasquetService } from './estadistica_basquet.service';
import { EstadisticaBasquetController } from './estadistica_basquet.controller';

@Module({
  controllers: [EstadisticaBasquetController],
  providers: [EstadisticaBasquetService],
})
export class EstadisticaBasquetModule {}
