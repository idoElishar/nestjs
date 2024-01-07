/* eslint-disable prettier/prettier */

import { Controller, Get, Param } from '@nestjs/common';
// import { DogDTO } from 'src/DTO/person.dto';
import { DogsService } from './dogs.service';
@Controller('dogs')
export class DogsController {
  constructor(private srv: DogsService) {}
  @Get()
  getDogs() {
    return this.srv.getAllDogs();
  }
  @Get(':id')
getDogById(@Param('id') id:number) {
    return this.srv.getDogById(id);

}
}
