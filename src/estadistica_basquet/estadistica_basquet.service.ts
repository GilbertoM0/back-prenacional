import { Injectable } from '@nestjs/common';
import { CreateEstadisticaBasquetDto } from './dto/create-estadistica_basquet.dto';
import { UpdateEstadisticaBasquetDto } from './dto/update-estadistica_basquet.dto';

@Injectable()
export class EstadisticaBasquetService {
  create(createEstadisticaBasquetDto: CreateEstadisticaBasquetDto) {
    return 'This action adds a new estadisticaBasquet';
  }

  findAll() {
    return `This action returns all estadisticaBasquet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estadisticaBasquet`;
  }

  update(id: number, updateEstadisticaBasquetDto: UpdateEstadisticaBasquetDto) {
    return `This action updates a #${id} estadisticaBasquet`;
  }

  remove(id: number) {
    return `This action removes a #${id} estadisticaBasquet`;
  }
}
