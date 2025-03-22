import { PartialType } from '@nestjs/mapped-types';
import { CreateFaseTorneoDto } from './create-fase_torneo.dto';

export class UpdateFaseTorneoDto extends PartialType(CreateFaseTorneoDto) {}
