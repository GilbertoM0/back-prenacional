import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstadisticaVoleyService } from './estadistica_voley.service';
import { CreateEstadisticaVoleyDto } from './dto/create-estadistica_voley.dto';
import { UpdateEstadisticaVoleyDto } from './dto/update-estadistica_voley.dto';

@Controller('estadistica-voley')
export class EstadisticaVoleyController {
  constructor(private readonly estadisticaVoleyService: EstadisticaVoleyService) {}

  @Post()
  create(@Body() createEstadisticaVoleyDto: CreateEstadisticaVoleyDto) {
    return this.estadisticaVoleyService.create(createEstadisticaVoleyDto);
  }

  @Get()
  findAll() {
    return this.estadisticaVoleyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estadisticaVoleyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstadisticaVoleyDto: UpdateEstadisticaVoleyDto) {
    return this.estadisticaVoleyService.update(+id, updateEstadisticaVoleyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estadisticaVoleyService.remove(+id);
  }
}
