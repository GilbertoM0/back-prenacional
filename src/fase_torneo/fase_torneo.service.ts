import { Injectable } from '@nestjs/common';
import { CreateFaseTorneoDto } from './dto/create-fase_torneo.dto';
import { UpdateFaseTorneoDto } from './dto/update-fase_torneo.dto';

@Injectable()
export class FaseTorneoService {
  create(createFaseTorneoDto: CreateFaseTorneoDto) {
    return 'This action adds a new faseTorneo';
  }

  findAll() {
    return `This action returns all faseTorneo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} faseTorneo`;
  }

  update(id: number, updateFaseTorneoDto: UpdateFaseTorneoDto) {
    return `This action updates a #${id} faseTorneo`;
  }

  remove(id: number) {
    return `This action removes a #${id} faseTorneo`;
  }
}
