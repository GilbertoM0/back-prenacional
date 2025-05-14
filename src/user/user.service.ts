import { HttpStatus, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service'; // Asegúrate de importar PrismaService

@Injectable()
export class UserService {
  private readonly logger = new Logger('UserService');

  constructor(private readonly prisma: PrismaService) {} // Inyecta PrismaService

  async create(createUserDto: CreateUserDto) {
    try {
      return await this.prisma.usuarios.create({
        data: createUserDto,
      });
    } catch (error) {
      this.logger.error('Error al crear usuario:', error);
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.prisma.usuarios.findMany();
    } catch (error) {
      this.logger.error('Error al obtener todos los usuarios:', error);
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.prisma.usuarios.findFirst({
        where: { id_user: id },
      });
      if (!user) {
        throw new NotFoundException({
          message: `Usuario con id ${id} no se encontró`,
          status: HttpStatus.BAD_REQUEST,
        });
      }
      return user;
    } catch (error) {
      this.logger.error(`Error al encontrar el usuario con id ${id}:`, error);
      throw error;
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const { id_user: __, ...data } = updateUserDto; // Excluir id del DTO
      await this.findOne(id); // Verifica si el usuario existe antes de actualizarlo
      return await this.prisma.usuarios.update({
        where: { id_user: id },
        data: data,
      });
    } catch (error) {
      this.logger.error(`Error al actualizar el usuario con id ${id}:`, error);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      await this.findOne(id); // Verifica si el usuario existe antes de eliminarlo
      return await this.prisma.usuarios.delete({
        where: { id_user: id },
      });
    } catch (error) {
      this.logger.error(`Error al eliminar el usuario con id ${id}:`, error);
      throw error;
    }
  }
}
