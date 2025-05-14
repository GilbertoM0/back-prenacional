// src/clasificacion/clasificacion.service.ts
import { HttpStatus, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateClasificacionDto } from './dto/create-clasificacion.dto';
import { UpdateClasificacionDto } from './dto/update-clasificacion.dto';
import { PrismaService } from '../prisma/prisma.service'; // Importa PrismaService

@Injectable()
export class ClasificacionService {
  private readonly logger = new Logger('ClasificacionService');

  constructor(private readonly prisma: PrismaService) {} // Inyecta PrismaService

  async create(createClasificacionDto: CreateClasificacionDto) {
    try {
      return await this.prisma.clasificacion.create({
        data: createClasificacionDto,
      });
    } catch (error) {
      this.logger.error('Error al crear la clasificación:', error);
      throw error;  // Si hay un error, lo lanzamos de nuevo para manejarlo a nivel superior
    }
  }

  async findAll() {
    try {
      return await this.prisma.clasificacion.findMany(); // Usa PrismaService para acceder a la base de datos
    } catch (error) {
      this.logger.error('Error al obtener todas las clasificaciones:', error);
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const clasificacion = await this.prisma.clasificacion.findFirst({ where: { id_clasificacion: id } });
      if (!clasificacion) {
        throw new NotFoundException({
          message: `Clasificación con id ${id} no se encontró`,
          status: HttpStatus.BAD_REQUEST,
        });
      }
      return clasificacion;
    } catch (error) {
      this.logger.error(`Error al encontrar la clasificación con id ${id}:`, error);
      throw error;
    }
  }

  async update(id: number, updateClasificacionDto: UpdateClasificacionDto) {
    try {
      const { id_clasificacion: __, ...data } = updateClasificacionDto; // Desestructuración para excluir el id
      await this.findOne(id);  // Verifica si la clasificación existe antes de actualizarla
      return await this.prisma.clasificacion.update({
        where: { id_clasificacion: id },
        data: data,
      });
    } catch (error) {
      this.logger.error(`Error al actualizar la clasificación con id ${id}:`, error);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      await this.findOne(id);  // Verifica si la clasificación existe antes de eliminarla
      return await this.prisma.clasificacion.delete({
        where: { id_clasificacion: id },
      });
    } catch (error) {
      this.logger.error(`Error al eliminar la clasificación con id ${id}:`, error);
      throw error;
    }
  }
}
