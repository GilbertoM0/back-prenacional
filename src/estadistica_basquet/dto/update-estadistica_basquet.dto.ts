import { PartialType } from '@nestjs/mapped-types';
import { CreateEstadisticaBasquetDto } from './create-estadistica_basquet.dto';

export class UpdateEstadisticaBasquetDto extends PartialType(CreateEstadisticaBasquetDto) {}
