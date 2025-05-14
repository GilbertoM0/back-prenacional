import { Module } from '@nestjs/common';
import { PuntosdeinteresService } from './puntosdeinteres.service';
import { PuntosdeinteresController } from './puntosdeinteres.controller';
import { PrismaModule } from '../prisma/prisma.module'; 
@Module({
  controllers: [PuntosdeinteresController],
  providers: [PuntosdeinteresService],
  imports: [PrismaModule],
})
export class PuntosdeinteresModule {}
