import { PartialType } from '@nestjs/mapped-types';
import { CreateEstadisticaVoleyDto } from './create-estadistica_voley.dto';

export class UpdateEstadisticaVoleyDto extends PartialType(CreateEstadisticaVoleyDto) {}
