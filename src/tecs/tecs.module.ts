import { Module } from '@nestjs/common';
import { TecsService } from './tecs.service';
import { TecsController } from './tecs.controller';
import { PrismaModule } from '../prisma/prisma.module'; 

@Module({
  controllers: [TecsController],
  providers: [TecsService],
  imports: [PrismaModule],
})
export class TecsModule {}
