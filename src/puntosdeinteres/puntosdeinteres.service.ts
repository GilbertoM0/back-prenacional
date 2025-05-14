import { HttpStatus, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreatePuntosdeintereDto } from './dto/create-puntosdeintere.dto';
import { UpdatePuntosdeintereDto } from './dto/update-puntosdeintere.dto';
import { PrismaService } from '../prisma/prisma.service'; // Asegúrate de importar PrismaService

@Injectable()
export class PuntosdeinteresService {
  private readonly logger = new Logger('PuntosdeinteresService');

  constructor(private readonly prisma: PrismaService) {} // Inyecta PrismaService

  async create(createPuntosdeintereDto: CreatePuntosdeintereDto) {
    try {
      return await this.prisma.puntosdeInteres.create({
        data: createPuntosdeintereDto,
      });
    } catch (error) {
      this.logger.error('Error al crear el punto de interés:', error);
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.prisma.puntosdeInteres.findMany(); // Usa PrismaService para obtener todos los puntos de interés
    } catch (error) {
      this.logger.error('Error al obtener todos los puntos de interés:', error);
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const puntos = await this.prisma.puntosdeInteres.findFirst({
        where: { id_PuntosdeInteres: id },
      });
      if (!puntos) {
        throw new NotFoundException({
          message: `Punto de interés con id ${id} no se encontró`,
          status: HttpStatus.BAD_REQUEST,
        });
      }
      return puntos;
    } catch (error) {
      this.logger.error(`Error al encontrar el punto de interés con id ${id}:`, error);
      throw error;
    }
  }

  async update(id: number, updatePuntosdeintereDto: UpdatePuntosdeintereDto) {
    try {
      const { id_PuntosdeInteres: __, ...data } = updatePuntosdeintereDto; // Desestructuración para excluir el id
      await this.findOne(id); // Verifica si el punto de interés existe antes de actualizarlo
      return await this.prisma.puntosdeInteres.update({
        where: { id_PuntosdeInteres: id },
        data: data,
      });
    } catch (error) {
      this.logger.error(`Error al actualizar el punto de interés con id ${id}:`, error);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      await this.findOne(id); // Verifica si el punto de interés existe antes de eliminarlo
      return await this.prisma.puntosdeInteres.delete({
        where: { id_PuntosdeInteres: id },
      });
    } catch (error) {
      this.logger.error(`Error al eliminar el punto de interés con id ${id}:`, error);
      throw error;
    }
  }
}
