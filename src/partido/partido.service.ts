import { HttpStatus, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreatePartidoDto } from './dto/create-partido.dto';
import { UpdatePartidoDto } from './dto/update-partido.dto';
import { PrismaService } from '../prisma/prisma.service'; // Asegúrate de importar PrismaService

@Injectable()
export class PartidoService {
  private readonly logger = new Logger('PartidoService');

  constructor(private readonly prisma: PrismaService) {} // Inyecta PrismaService

  async create(createPartidoDto: CreatePartidoDto) {
    try {
      return await this.prisma.partidos.create({
        data: createPartidoDto,
      });
    } catch (error) {
      this.logger.error('Error al crear el partido:', error);
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.prisma.partidos.findMany(); // Usa PrismaService para obtener todos los partidos
    } catch (error) {
      this.logger.error('Error al obtener todos los partidos:', error);
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const partido = await this.prisma.partidos.findFirst({
        where: { id_partido: id },
      });
      if (!partido) {
        throw new NotFoundException({
          message: `Partido con id ${id} no se encontró`,
          status: HttpStatus.BAD_REQUEST,
        });
      }
      return partido;
    } catch (error) {
      this.logger.error(`Error al encontrar el partido con id ${id}:`, error);
      throw error;
    }
  }

  async update(id: number, updatePartidoDto: UpdatePartidoDto) {
    try {
      const { id_partido: __, ...data } = updatePartidoDto; // Desestructuración para excluir el id
      await this.findOne(id); // Verifica si el partido existe antes de actualizarlo
      return await this.prisma.partidos.update({
        where: { id_partido: id },
        data: data,
      });
    } catch (error) {
      this.logger.error(`Error al actualizar el partido con id ${id}:`, error);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      await this.findOne(id); // Verifica si el partido existe antes de eliminarlo
      return await this.prisma.partidos.delete({
        where: { id_partido: id },
      });
    } catch (error) {
      this.logger.error(`Error al eliminar el partido con id ${id}:`, error);
      throw error;
    }
  }
}
