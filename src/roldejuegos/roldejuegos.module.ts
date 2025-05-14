import { Module } from '@nestjs/common';
import { RoldejuegosService } from './roldejuegos.service';
import { RoldejuegosController } from './roldejuegos.controller';
import { PrismaModule } from '../prisma/prisma.module'; 

@Module({
  controllers: [RoldejuegosController],
  providers: [RoldejuegosService],
  imports: [PrismaModule],
})
export class RoldejuegosModule {}
