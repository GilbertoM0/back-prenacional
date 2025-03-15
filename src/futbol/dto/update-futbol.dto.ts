import { PartialType } from '@nestjs/mapped-types';
import { CreateFutbolDto } from './create-futbol.dto';

export class UpdateFutbolDto extends PartialType(CreateFutbolDto) {}
