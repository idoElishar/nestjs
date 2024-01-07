import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonController } from './person/person.controller';
import { PersonService } from './person/person.service';
import { DogsController } from './dogs/dogs.controller';
import { DogsService } from './dogs/dogs.service';

@Module({
  imports: [],
  controllers: [AppController, PersonController, DogsController],
  providers: [AppService, PersonService, DogsService],
})
export class AppModule {}
