import { PartialType } from '@nestjs/mapped-types';
import { CreateVoleibolDto } from './create-voleibol.dto';

export class UpdateVoleibolDto extends PartialType(CreateVoleibolDto) {}
