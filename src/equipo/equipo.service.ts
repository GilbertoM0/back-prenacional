// src/equipo/equipo.service.ts
import { HttpStatus, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { PrismaService } from '../prisma/prisma.service'; // Importa PrismaService

@Injectable()
export class EquipoService {
  private readonly logger = new Logger('EquipoService');

  constructor(private readonly prisma: PrismaService) {} // Inyecta PrismaService

  async create(createEquipoDto: CreateEquipoDto) {
    try {
      return await this.prisma.equipos.create({
        data: createEquipoDto,
      });
    } catch (error) {
      this.logger.error('Error al crear el equipo:', error);
      throw error; // Lanza el error para que se maneje en el nivel superior
    }
  }

  async findAll() {
    try {
      return await this.prisma.equipos.findMany(); // Usa PrismaService para obtener todos los equipos
    } catch (error) {
      this.logger.error('Error al obtener todos los equipos:', error);
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const equipo = await this.prisma.equipos.findFirst({
        where: { id_equipo: id },
      });
      if (!equipo) {
        throw new NotFoundException({
          message: `Equipo con id ${id} no se encontró`,
          status: HttpStatus.BAD_REQUEST,
        });
      }
      return equipo;
    } catch (error) {
      this.logger.error(`Error al encontrar el equipo con id ${id}:`, error);
      throw error;
    }
  }

  async update(id: number, updateEquipoDto: UpdateEquipoDto) {
    try {
      const { id_equipo: __, ...data } = updateEquipoDto; // Desestructuración para excluir el id
      await this.findOne(id); // Verifica si el equipo existe antes de actualizarlo
      return await this.prisma.equipos.update({
        where: { id_equipo: id },
        data: data,
      });
    } catch (error) {
      this.logger.error(`Error al actualizar el equipo con id ${id}:`, error);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      await this.findOne(id); // Verifica si el equipo existe antes de eliminarlo
      return await this.prisma.equipos.delete({
        where: { id_equipo: id },
      });
    } catch (error) {
      this.logger.error(`Error al eliminar el equipo con id ${id}:`, error);
      throw error;
    }
  }
}
