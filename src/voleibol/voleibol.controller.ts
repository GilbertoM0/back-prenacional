import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VoleibolService } from './voleibol.service';
import { CreateVoleibolDto } from './dto/create-voleibol.dto';
import { UpdateVoleibolDto } from './dto/update-voleibol.dto';

@Controller('voleibol')
export class VoleibolController {
  constructor(private readonly voleibolService: VoleibolService) {}

  @Post()
  create(@Body() createVoleibolDto: CreateVoleibolDto) {
    return this.voleibolService.create(createVoleibolDto);
  }

  @Get()
  findAll() {
    return this.voleibolService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.voleibolService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVoleibolDto: UpdateVoleibolDto) {
    return this.voleibolService.update(+id, updateVoleibolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.voleibolService.remove(+id);
  }
}
