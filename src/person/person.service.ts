/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PersonDTO } from 'src/DTO/person.dto';
@Injectable()
export class PersonService {
  persons: PersonDTO[] = [];
  constructor() {
    const per1: PersonDTO = new PersonDTO();
    per1.id = 1;
    per1.name = 'John';
    per1.age = 30;

    const per2: PersonDTO = new PersonDTO();
    per2.id = 2;
    per2.name = 'Daniel';
    per2.age = 30;

    const per3: PersonDTO = new PersonDTO();
    per3.id = 3;
    per3.name = 'Daniel';
    per3.age = 30;

    this.persons.push(per1);
    this.persons.push(per2);
    this.persons.push(per3);
  }
  getAllPersons(): PersonDTO[] {
    return this.persons;
  }
  getPersonById(id: number): PersonDTO {
    return this.persons.find((person) => person.id == id);
  }
  addPerson(newPerson: PersonDTO): PersonDTO {
    this.persons.push(newPerson);
    return newPerson;
  }
  updatePerson(id: number, newPerson: PersonDTO): PersonDTO {
    const index=this.persons.findIndex((person) => person.id == id);
    if(index>=0){
        return this.persons[index]=newPerson;
    }
  }
  deletePerson(id: number): string {
    const index=this.persons.findIndex((person) => person.id == id);
    if(index>=0){
        this.persons.splice(index,1);
        return "deleted"
    }
  }
}
