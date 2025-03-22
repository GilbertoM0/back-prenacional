import { Module } from '@nestjs/common';

import { EquipoModule } from './equipo/equipo.module';
import { UserModule } from './user/user.module';
import { CanchaModule } from './cancha/cancha.module';
import { FaseTorneoModule } from './fase_torneo/fase_torneo.module';
import { ClasificacionModule } from './clasificacion/clasificacion.module';
import { JugadorModule } from './jugador/jugador.module';
import { PartidoModule } from './partido/partido.module';
import { EstadisticaBasquetModule } from './estadistica_basquet/estadistica_basquet.module';
import { EstadisticaFutbolModule } from './estadistica_futbol/estadistica_futbol.module';
import { EstadisticaVoleyModule } from './estadistica_voley/estadistica_voley.module';

@Module({
  imports: [ EquipoModule, UserModule, CanchaModule, FaseTorneoModule, ClasificacionModule, JugadorModule, PartidoModule, EstadisticaBasquetModule, EstadisticaFutbolModule, EstadisticaVoleyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
