import { PartialType } from '@nestjs/mapped-types';
import { CreateEquipoDto } from './create-equipo.dto';
import { IsNumber, IsPositive } from 'class-validator';

export class UpdateEquipoDto extends PartialType(CreateEquipoDto) {
    @IsNumber()
    @IsPositive()
    id: number;
}
