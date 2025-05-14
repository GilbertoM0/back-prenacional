import { HttpStatus, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateTecDto } from './dto/create-tec.dto';
import { UpdateTecDto } from './dto/update-tec.dto';
import { PrismaService } from '../prisma/prisma.service'; // Asegúrate de importar PrismaService

@Injectable()
export class TecsService {
  private readonly logger = new Logger('TecsService');

  constructor(private readonly prisma: PrismaService) {} // Inyecta PrismaService

  async create(createTecDto: CreateTecDto) {
    try {
      return await this.prisma.tecs.create({
        data: createTecDto,
      });
    } catch (error) {
      this.logger.error('Error al crear Tec:', error);
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.prisma.tecs.findMany();
    } catch (error) {
      this.logger.error('Error al obtener todos los Tec:', error);
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const tec = await this.prisma.tecs.findFirst({
        where: { id_tecs: id },
      });
      if (!tec) {
        throw new NotFoundException({
          message: `Tec con id ${id} no se encontró`,
          status: HttpStatus.BAD_REQUEST,
        });
      }
      return tec;
    } catch (error) {
      this.logger.error(`Error al encontrar el Tec con id ${id}:`, error);
      throw error;
    }
  }

  async update(id: number, updateTecDto: UpdateTecDto) {
    try {
      const { id_tecs: __, ...data } = updateTecDto; // Desestructuración para excluir el id
      await this.findOne(id); // Verifica si el Tec existe antes de actualizarlo
      return await this.prisma.tecs.update({
        where: { id_tecs: id },
        data: data,
      });
    } catch (error) {
      this.logger.error(`Error al actualizar el Tec con id ${id}:`, error);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      await this.findOne(id); // Verifica si el Tec existe antes de eliminarlo
      return await this.prisma.tecs.delete({
        where: { id_tecs: id },
      });
    } catch (error) {
      this.logger.error(`Error al eliminar el Tec con id ${id}:`, error);
      throw error;
    }
  }
}
