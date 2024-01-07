/* eslint-disable prettier/prettier */

import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonDTO } from 'src/DTO/person.dto';

@Controller('person')
export class PersonController {
  constructor(private srv: PersonService) {}
  @Get()
  getPersons() {
    return this.srv.getAllPersons();
  }
  @Get(':id')
  getPerson(@Param('id',ParseIntPipe) id: number) {
    return this.srv.getPersonById(id);
  }


  @Post()
  addPerson(@Body() newPerson: PersonDTO) {
    return this.srv.addPerson(newPerson);
  }
  @Put(':id')
  updaterPerson(@Param('id') id: number, @Body() newPerson: PersonDTO) {
    return this.srv.updatePerson(id, newPerson);
}
@Delete(':id')
  deletePerson(@Param('id') id: number) {
    return this.srv.deletePerson(id);
  }
}
