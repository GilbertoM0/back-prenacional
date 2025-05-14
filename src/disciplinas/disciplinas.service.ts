// src/disciplinas/disciplinas.service.ts
import { HttpStatus, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';
import { PrismaService } from '../prisma/prisma.service'; // Importa PrismaService

@Injectable()
export class DisciplinasService {
  private readonly logger = new Logger('DisciplinasService');

  constructor(private readonly prisma: PrismaService) {} // Inyecta PrismaService

  async create(createDisciplinaDto: CreateDisciplinaDto) {
    try {
      return await this.prisma.diciplinas.create({
        data: createDisciplinaDto,
      });
    } catch (error) {
      this.logger.error('Error al crear la disciplina:', error);
      throw error; // Lanza el error para que se maneje en el nivel superior
    }
  }

  async findAll() {
    try {
      return await this.prisma.diciplinas.findMany(); // Usa PrismaService para obtener todas las disciplinas
    } catch (error) {
      this.logger.error('Error al obtener todas las disciplinas:', error);
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const disciplina = await this.prisma.diciplinas.findFirst({
        where: { id_diciplinas: id },
      });
      if (!disciplina) {
        throw new NotFoundException({
          message: `Disciplina con id ${id} no se encontró`,
          status: HttpStatus.BAD_REQUEST,
        });
      }
      return disciplina;
    } catch (error) {
      this.logger.error(`Error al encontrar la disciplina con id ${id}:`, error);
      throw error;
    }
  }

  async update(id: number, updateDisciplinaDto: UpdateDisciplinaDto) {
    try {
      const { id_diciplinas: __, ...data } = updateDisciplinaDto; // Desestructuración para excluir el id
      await this.findOne(id); // Verifica si la disciplina existe antes de actualizarla
      return await this.prisma.diciplinas.update({
        where: { id_diciplinas: id },
        data: data,
      });
    } catch (error) {
      this.logger.error(`Error al actualizar la disciplina con id ${id}:`, error);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      await this.findOne(id); // Verifica si la disciplina existe antes de eliminarla
      return await this.prisma.diciplinas.delete({
        where: { id_diciplinas: id },
      });
    } catch (error) {
      this.logger.error(`Error al eliminar la disciplina con id ${id}:`, error);
      throw error;
    }
  }
}
