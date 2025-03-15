import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BasquetballService } from './basquetball.service';
import { CreateBasquetballDto } from './dto/create-basquetball.dto';
import { UpdateBasquetballDto } from './dto/update-basquetball.dto';

@Controller('basquetball')
export class BasquetballController {
  constructor(private readonly basquetballService: BasquetballService) {}

  @Post()
  create(@Body() createBasquetballDto: CreateBasquetballDto) {
    return this.basquetballService.create(createBasquetballDto);
  }

  @Get()
  findAll() {
    return this.basquetballService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.basquetballService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBasquetballDto: UpdateBasquetballDto) {
    return this.basquetballService.update(+id, updateBasquetballDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.basquetballService.remove(+id);
  }
}
