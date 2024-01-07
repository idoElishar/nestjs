/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, Length } from "class-validator";
export class PersonDTO {
  @IsNumber()
  id: number;
  @IsNotEmpty()
  @Length(2,20)
  name: string;
  age: number;
}
export class DogDTO{
  id:number;
  name:string;
  age:number;
  isDanger:boolean;
}