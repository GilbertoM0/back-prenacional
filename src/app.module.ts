import { Module } from '@nestjs/common';
import { BasquetballModule } from './basquetball/basquetball.module';
import { FutbolModule } from './futbol/futbol.module';
import { VoleibolModule } from './voleibol/voleibol.module';

@Module({
  imports: [BasquetballModule, FutbolModule, VoleibolModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
