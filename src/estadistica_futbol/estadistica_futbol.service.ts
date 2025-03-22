import { Injectable } from '@nestjs/common';
import { CreateEstadisticaFutbolDto } from './dto/create-estadistica_futbol.dto';
import { UpdateEstadisticaFutbolDto } from './dto/update-estadistica_futbol.dto';

@Injectable()
export class EstadisticaFutbolService {
  create(createEstadisticaFutbolDto: CreateEstadisticaFutbolDto) {
    return 'This action adds a new estadisticaFutbol';
  }

  findAll() {
    return `This action returns all estadisticaFutbol`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estadisticaFutbol`;
  }

  update(id: number, updateEstadisticaFutbolDto: UpdateEstadisticaFutbolDto) {
    return `This action updates a #${id} estadisticaFutbol`;
  }

  remove(id: number) {
    return `This action removes a #${id} estadisticaFutbol`;
  }
}
