import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class EquipoService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('ProductService')
  onModuleInit() {
    this.$connect();
    this.logger.log("Base de datos conectada");
  }
  create(createEquipoDto: CreateEquipoDto) {
    return this.equipo.create({
      data: createEquipoDto 
    });
  } 

  findAll() {
      return this.equipo.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} equipo`;
  }

  update(id: number, updateEquipoDto: UpdateEquipoDto) {
    return `This action updates a #${id} equipo`;
  }

  remove(id: number) {
    return `This action removes a #${id} equipo`;
  }
}
