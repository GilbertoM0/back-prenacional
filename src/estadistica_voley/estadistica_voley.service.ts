import { Injectable } from '@nestjs/common';
import { CreateEstadisticaVoleyDto } from './dto/create-estadistica_voley.dto';
import { UpdateEstadisticaVoleyDto } from './dto/update-estadistica_voley.dto';

@Injectable()
export class EstadisticaVoleyService {
  create(createEstadisticaVoleyDto: CreateEstadisticaVoleyDto) {
    return 'This action adds a new estadisticaVoley';
  }

  findAll() {
    return `This action returns all estadisticaVoley`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estadisticaVoley`;
  }

  update(id: number, updateEstadisticaVoleyDto: UpdateEstadisticaVoleyDto) {
    return `This action updates a #${id} estadisticaVoley`;
  }

  remove(id: number) {
    return `This action removes a #${id} estadisticaVoley`;
  }
}
