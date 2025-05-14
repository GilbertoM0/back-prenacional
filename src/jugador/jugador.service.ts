// src/jugadores/jugador.service.ts
import { HttpStatus, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateJugadorDto } from './dto/create-jugador.dto';
import { UpdateJugadorDto } from './dto/update-jugador.dto';
import { PrismaService } from '../prisma/prisma.service'; // Importa PrismaService

@Injectable()
export class JugadorService {
  private readonly logger = new Logger('JugadorService');

  constructor(private readonly prisma: PrismaService) {} // Inyecta PrismaService

  async create(createJugadorDto: CreateJugadorDto) {
    try {
      return await this.prisma.jugadores.create({
        data: createJugadorDto,
      });
    } catch (error) {
      this.logger.error('Error al crear el jugador:', error);
      throw error; // Lanza el error para que se maneje en el nivel superior
    }
  }

  async findAll() {
    try {
      return await this.prisma.jugadores.findMany(); // Usa PrismaService para obtener todos los jugadores
    } catch (error) {
      this.logger.error('Error al obtener todos los jugadores:', error);
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const jugador = await this.prisma.jugadores.findFirst({
        where: { id_jugador: id },
      });
      if (!jugador) {
        throw new NotFoundException({
          message: `Jugador con id ${id} no se encontró`,
          status: HttpStatus.BAD_REQUEST,
        });
      }
      return jugador;
    } catch (error) {
      this.logger.error(`Error al encontrar el jugador con id ${id}:`, error);
      throw error;
    }
  }

  async update(id: number, updateJugadorDto: UpdateJugadorDto) {
    try {
      const { id_jugador: __, ...data } = updateJugadorDto; // Desestructuración para excluir el id
      await this.findOne(id); // Verifica si el jugador existe antes de actualizarlo
      return await this.prisma.jugadores.update({
        where: { id_jugador: id },
        data: data,
      });
    } catch (error) {
      this.logger.error(`Error al actualizar el jugador con id ${id}:`, error);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      await this.findOne(id); // Verifica si el jugador existe antes de eliminarlo
      return await this.prisma.jugadores.delete({
        where: { id_jugador: id },
      });
    } catch (error) {
      this.logger.error(`Error al eliminar el jugador con id ${id}:`, error);
      throw error;
    }
  }
}
