import { Module } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { EquipoController } from './equipo.controller';
import { PrismaModule } from '../prisma/prisma.module'; 

@Module({
  controllers: [EquipoController],
  providers: [EquipoService],
  imports: [PrismaModule],
})
export class EquipoModule {}
