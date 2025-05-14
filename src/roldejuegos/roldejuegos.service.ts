import { HttpStatus, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateRoldejuegoDto } from './dto/create-roldejuego.dto';
import { UpdateRoldejuegoDto } from './dto/update-roldejuego.dto';
import { PrismaService } from '../prisma/prisma.service'; // Asegúrate de importar PrismaService

@Injectable()
export class RoldejuegosService {
  private readonly logger = new Logger('RoldejuegosService');

  constructor(private readonly prisma: PrismaService) {} // Inyecta PrismaService

  async create(createRoldejuegoDto: CreateRoldejuegoDto) {
    try {
      return await this.prisma.rolDeJuegos.create({
        data: createRoldejuegoDto,
      });
    } catch (error) {
      this.logger.error('Error al crear el rol de juego:', error);
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.prisma.rolDeJuegos.findMany(); // Usa PrismaService para obtener todos los roles de juego
    } catch (error) {
      this.logger.error('Error al obtener todos los roles de juego:', error);
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const rol = await this.prisma.rolDeJuegos.findFirst({
        where: { id_RolDeJuegos: id },
      });
      if (!rol) {
        throw new NotFoundException({
          message: `Rol de juego con id ${id} no se encontró`,
          status: HttpStatus.BAD_REQUEST,
        });
      }
      return rol;
    } catch (error) {
      this.logger.error(`Error al encontrar el rol de juego con id ${id}:`, error);
      throw error;
    }
  }

  async update(id: number, updateRoldejuegoDto: UpdateRoldejuegoDto) {
    try {
      const { id_RolDeJuegos: __, ...data } = updateRoldejuegoDto; // Desestructuración para excluir el id
      await this.findOne(id); // Verifica si el rol de juego existe antes de actualizarlo
      return await this.prisma.rolDeJuegos.update({
        where: { id_RolDeJuegos: id },
        data: data,
      });
    } catch (error) {
      this.logger.error(`Error al actualizar el rol de juego con id ${id}:`, error);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      await this.findOne(id); // Verifica si el rol de juego existe antes de eliminarlo
      return await this.prisma.rolDeJuegos.delete({
        where: { id_RolDeJuegos: id },
      });
    } catch (error) {
      this.logger.error(`Error al eliminar el rol de juego con id ${id}:`, error);
      throw error;
    }
  }
}
