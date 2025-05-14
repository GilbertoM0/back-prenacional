import { Module } from '@nestjs/common';
import { PartidoService } from './partido.service';
import { PartidoController } from './partido.controller';
import { PrismaModule } from '../prisma/prisma.module'; 

@Module({
  controllers: [PartidoController],
  providers: [PartidoService],
  imports: [PrismaModule],
})
export class PartidoModule {}
