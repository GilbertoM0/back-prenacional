import { Module } from '@nestjs/common';
import { DisciplinasService } from './disciplinas.service';
import { DisciplinasController } from './disciplinas.controller';
import { PrismaModule } from '../prisma/prisma.module'; 

@Module({
  controllers: [DisciplinasController],
  providers: [DisciplinasService],
  imports: [PrismaModule],
})
export class DisciplinasModule {}
