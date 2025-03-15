import { Module } from '@nestjs/common';
import { BasquetballService } from './basquetball.service';
import { BasquetballController } from './basquetball.controller';

@Module({
  controllers: [BasquetballController],
  providers: [BasquetballService],
})
export class BasquetballModule {}
