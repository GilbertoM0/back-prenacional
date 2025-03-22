import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstadisticaBasquetService } from './estadistica_basquet.service';
import { CreateEstadisticaBasquetDto } from './dto/create-estadistica_basquet.dto';
import { UpdateEstadisticaBasquetDto } from './dto/update-estadistica_basquet.dto';

@Controller('estadistica-basquet')
export class EstadisticaBasquetController {
  constructor(private readonly estadisticaBasquetService: EstadisticaBasquetService) {}

  @Post()
  create(@Body() createEstadisticaBasquetDto: CreateEstadisticaBasquetDto) {
    return this.estadisticaBasquetService.create(createEstadisticaBasquetDto);
  }

  @Get()
  findAll() {
    return this.estadisticaBasquetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estadisticaBasquetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstadisticaBasquetDto: UpdateEstadisticaBasquetDto) {
    return this.estadisticaBasquetService.update(+id, updateEstadisticaBasquetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estadisticaBasquetService.remove(+id);
  }
}
