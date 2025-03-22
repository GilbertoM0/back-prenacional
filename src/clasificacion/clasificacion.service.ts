import { Injectable } from '@nestjs/common';
import { CreateClasificacionDto } from './dto/create-clasificacion.dto';
import { UpdateClasificacionDto } from './dto/update-clasificacion.dto';

@Injectable()
export class ClasificacionService {
  create(createClasificacionDto: CreateClasificacionDto) {
    return 'This action adds a new clasificacion';
  }

  findAll() {
    return `This action returns all clasificacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clasificacion`;
  }

  update(id: number, updateClasificacionDto: UpdateClasificacionDto) {
    return `This action updates a #${id} clasificacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} clasificacion`;
  }
}
