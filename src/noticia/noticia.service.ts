// src/noticia/noticia.service.ts
import { HttpStatus, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateNoticiaDto } from './dto/create-noticia.dto';
import { UpdateNoticiaDto } from './dto/update-noticia.dto';
import { PrismaService } from '../prisma/prisma.service'; // Asegúrate de tener este servicio importado

@Injectable()
export class NoticiaService {
  private readonly logger = new Logger('NoticiaService');

  constructor(private readonly prisma: PrismaService) {}

  async create(createNoticiaDto: CreateNoticiaDto) {
    try {
      return await this.prisma.noticias.create({
        data: createNoticiaDto,
      });
    } catch (error) {
      this.logger.error('Error al crear la noticia:', error);
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.prisma.noticias.findMany();
    } catch (error) {
      this.logger.error('Error al obtener todas las noticias:', error);
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const noticia = await this.prisma.noticias.findFirst({
        where: { id_noticia: id },
      });
      if (!noticia) {
        throw new NotFoundException({
          message: `Noticia con id ${id} no se encontró`,
          status: HttpStatus.BAD_REQUEST,
        });
      }
      return noticia;
    } catch (error) {
      this.logger.error(`Error al encontrar la noticia con id ${id}:`, error);
      throw error;
    }
  }

  async update(id: number, updateNoticiaDto: UpdateNoticiaDto) {
    try {
      const { id_noticia: __, ...data } = updateNoticiaDto;
      await this.findOne(id);
      return await this.prisma.noticias.update({
        where: { id_noticia: id },
        data: data,
      });
    } catch (error) {
      this.logger.error(`Error al actualizar la noticia con id ${id}:`, error);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      await this.findOne(id);
      return await this.prisma.noticias.delete({
        where: { id_noticia: id },
      });
    } catch (error) {
      this.logger.error(`Error al eliminar la noticia con id ${id}:`, error);
      throw error;
    }
  }
}
