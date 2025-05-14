import { Module } from '@nestjs/common';
import { JugadorService } from './jugador.service';
import { JugadorController } from './jugador.controller';
import { PrismaModule } from '../prisma/prisma.module'; 

@Module({
  controllers: [JugadorController],
  providers: [JugadorService],
  imports: [PrismaModule],
})
export class JugadorModule {}
