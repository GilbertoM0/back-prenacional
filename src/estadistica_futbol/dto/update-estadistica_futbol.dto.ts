import { PartialType } from '@nestjs/mapped-types';
import { CreateEstadisticaFutbolDto } from './create-estadistica_futbol.dto';

export class UpdateEstadisticaFutbolDto extends PartialType(CreateEstadisticaFutbolDto) {}
