import { Module } from '@nestjs/common';
import { ClasificacionService } from './clasificacion.service';
import { ClasificacionController } from './clasificacion.controller';
import { PrismaModule } from '../prisma/prisma.module'; 

@Module({
  controllers: [ClasificacionController],
  providers: [ClasificacionService],
  imports: [PrismaModule],
})
export class ClasificacionModule {}
