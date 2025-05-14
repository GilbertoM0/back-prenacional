// src/cancha/cancha.service.ts
import { HttpStatus, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateCanchaDto } from './dto/create-cancha.dto';
import { UpdateCanchaDto } from './dto/update-cancha.dto';
import { PrismaService } from '../prisma/prisma.service'; // Importa PrismaService

@Injectable()
export class CanchaService {
  private readonly logger = new Logger('CanchaService');

  constructor(private readonly prisma: PrismaService) {} // Inyecta PrismaService

  async create(createCanchaDto: CreateCanchaDto) {
    try {
      return await this.prisma.canchas.create({
        data: createCanchaDto,
      });
    } catch (error) {
      this.logger.error('Error al crear la cancha:', error);
      throw error;  // Si hay un error, lo lanzamos de nuevo para manejarlo a nivel superior
    }
  }

  async findAll() {
    try {
      return await this.prisma.canchas.findMany(); // Usa PrismaService para acceder a la base de datos
    } catch (error) {
      this.logger.error('Error al obtener todas las canchas:', error);
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const cancha = await this.prisma.canchas.findFirst({ where: { id_cancha: id } });
      if (!cancha) {
        throw new NotFoundException({
          message: `Cancha con id ${id} no se encontró`,
          status: HttpStatus.BAD_REQUEST,
        });
      }
      return cancha;
    } catch (error) {
      this.logger.error(`Error al encontrar la cancha con id ${id}:`, error);
      throw error;
    }
  }

  async update(id: number, updateCanchaDto: UpdateCanchaDto) {
    try {
      const { id_cancha: __, ...data } = updateCanchaDto; // Desestructuración para excluir el id
      await this.findOne(id);  // Verifica si la cancha existe antes de actualizarla
      return await this.prisma.canchas.update({
        where: { id_cancha: id },
        data: data,
      });
    } catch (error) {
      this.logger.error(`Error al actualizar la cancha con id ${id}:`, error);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      await this.findOne(id);  // Verifica si la cancha existe antes de eliminarla
      return await this.prisma.canchas.delete({
        where: { id_cancha: id },
      });
    } catch (error) {
      this.logger.error(`Error al eliminar la cancha con id ${id}:`, error);
      throw error;
    }
  }
}
