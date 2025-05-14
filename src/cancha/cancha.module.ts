import { Module } from '@nestjs/common';
import { CanchaService } from './cancha.service';
import { CanchaController } from './cancha.controller';
import { PrismaModule } from '../prisma/prisma.module'; 

@Module({
  controllers: [CanchaController],
  providers: [CanchaService],
  imports: [PrismaModule],
})
export class CanchaModule {}
