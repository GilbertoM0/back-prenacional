import { PartialType } from '@nestjs/mapped-types';
import { CreateBasquetballDto } from './create-basquetball.dto';

export class UpdateBasquetballDto extends PartialType(CreateBasquetballDto) {}
