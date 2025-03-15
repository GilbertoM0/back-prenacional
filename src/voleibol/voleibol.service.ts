import { Injectable } from '@nestjs/common';
import { CreateVoleibolDto } from './dto/create-voleibol.dto';
import { UpdateVoleibolDto } from './dto/update-voleibol.dto';

@Injectable()
export class VoleibolService {
  create(createVoleibolDto: CreateVoleibolDto) {
    return 'This action adds a new voleibol';
  }

  findAll() {
    return `This action returns all voleibol`;
  }

  findOne(id: number) {
    return `This action returns a #${id} voleibol`;
  }

  update(id: number, updateVoleibolDto: UpdateVoleibolDto) {
    return `This action updates a #${id} voleibol`;
  }

  remove(id: number) {
    return `This action removes a #${id} voleibol`;
  }
}
