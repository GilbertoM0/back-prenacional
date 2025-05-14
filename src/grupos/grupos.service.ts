// src/grupos/grupos.service.ts
import { HttpStatus, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { PrismaService } from '../prisma/prisma.service'; // Importa PrismaService

@Injectable()
export class GruposService {
  private readonly logger = new Logger('GruposService');

  constructor(private readonly prisma: PrismaService) {} // Inyecta PrismaService

  async create(createGrupoDto: CreateGrupoDto) {
    try {
      return await this.prisma.grupos.create({
        data: createGrupoDto,
      });
    } catch (error) {
      this.logger.error('Error al crear el grupo:', error);
      throw error; // Lanza el error para que se maneje en el nivel superior
    }
  }

  async findAll() {
    try {
      return await this.prisma.grupos.findMany(); // Usa PrismaService para obtener todos los grupos
    } catch (error) {
      this.logger.error('Error al obtener todos los grupos:', error);
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const grupo = await this.prisma.grupos.findFirst({
        where: { id_grupo: id },
      });
      if (!grupo) {
        throw new NotFoundException({
          message: `Grupo con id ${id} no se encontró`,
          status: HttpStatus.BAD_REQUEST,
        });
      }
      return grupo;
    } catch (error) {
      this.logger.error(`Error al encontrar el grupo con id ${id}:`, error);
      throw error;
    }
  }

  async update(id: number, updateGrupoDto: UpdateGrupoDto) {
    try {
      const { id_grupo: __, ...data } = updateGrupoDto; // Desestructuración para excluir el id
      await this.findOne(id); // Verifica si el grupo existe antes de actualizarlo
      return await this.prisma.grupos.update({
        where: { id_grupo: id },
        data: data,
      });
    } catch (error) {
      this.logger.error(`Error al actualizar el grupo con id ${id}:`, error);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      await this.findOne(id); // Verifica si el grupo existe antes de eliminarlo
      return await this.prisma.grupos.delete({
        where: { id_grupo: id },
      });
    } catch (error) {
      this.logger.error(`Error al eliminar el grupo con id ${id}:`, error);
      throw error;
    }
  }
}
