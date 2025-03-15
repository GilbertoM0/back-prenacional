import { Injectable } from '@nestjs/common';
import { CreateBasquetballDto } from './dto/create-basquetball.dto';
import { UpdateBasquetballDto } from './dto/update-basquetball.dto';

@Injectable()
export class BasquetballService {
  create(createBasquetballDto: CreateBasquetballDto) {
    return 'This action adds a new basquetball';
  }

  findAll() {
    return `This action returns all basquetball`;
  }

  findOne(id: number) {
    return `This action returns a #${id} basquetball`;
  }

  update(id: number, updateBasquetballDto: UpdateBasquetballDto) {
    return `This action updates a #${id} basquetball`;
  }

  remove(id: number) {
    return `This action removes a #${id} basquetball`;
  }
}
