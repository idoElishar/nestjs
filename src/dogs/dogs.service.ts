/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { DogDTO } from 'src/DTO/person.dto';

@Injectable()
export class DogsService {
    dogs: DogDTO[] = [];
    constructor() {
      const per1: DogDTO = new DogDTO();
      per1.id = 1;
      per1.name = 'Bogy';
      per1.age = 30;
  
      const per2: DogDTO = new DogDTO();
      per2.id = 2;
      per2.name = 'Mizi';
      per2.age = 30;
  
      const per3: DogDTO = new DogDTO();
      per3.id = 3;
      per3.name = 'Messi';
      per3.age = 30;
  
      this.dogs.push(per1);
      this.dogs.push(per2);
      this.dogs.push(per3);
    }
getAllDogs(): DogDTO[] {
    return this.dogs;
}
getDogById(id: number): DogDTO {
    console.log(id);
    
    console.log(this.dogs.find(dog => dog.id === id));
    return this.dogs.find(dog => dog.id == id);
}

}
