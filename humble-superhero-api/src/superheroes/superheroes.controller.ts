import { Controller, Get, Post, Body } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { Superhero } from './superheroes.service';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  addSuperhero(
    @Body() body: { name: string; superpower: string; humilityScore: number },
  ): Superhero | { message: string } {
    const { name, superpower, humilityScore } = body;

    if (typeof humilityScore !== 'number' || humilityScore < 1 || humilityScore > 10) {
      return { message: 'Humility score must be a number between 1 and 10' };
    }

    return this.superheroesService.addSuperhero(name, superpower, humilityScore);
  }

  @Get()
  getSuperheroes() {
    return this.superheroesService.getSuperheroes();
  }
}
