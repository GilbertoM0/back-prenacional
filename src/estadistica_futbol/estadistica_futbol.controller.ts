import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstadisticaFutbolService } from './estadistica_futbol.service';
import { CreateEstadisticaFutbolDto } from './dto/create-estadistica_futbol.dto';
import { UpdateEstadisticaFutbolDto } from './dto/update-estadistica_futbol.dto';

@Controller('estadistica-futbol')
export class EstadisticaFutbolController {
  constructor(private readonly estadisticaFutbolService: EstadisticaFutbolService) {}

  @Post()
  create(@Body() createEstadisticaFutbolDto: CreateEstadisticaFutbolDto) {
    return this.estadisticaFutbolService.create(createEstadisticaFutbolDto);
  }

  @Get()
  findAll() {
    return this.estadisticaFutbolService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estadisticaFutbolService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstadisticaFutbolDto: UpdateEstadisticaFutbolDto) {
    return this.estadisticaFutbolService.update(+id, updateEstadisticaFutbolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estadisticaFutbolService.remove(+id);
  }
}
