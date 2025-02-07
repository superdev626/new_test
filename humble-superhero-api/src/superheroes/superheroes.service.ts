import { Injectable } from '@nestjs/common';

export interface Superhero {
  name: string;
  superpower: string;
  humilityScore: number;
}

@Injectable()
export class SuperheroesService {
  private superheroes: Superhero[] = [];

  addSuperhero(name: string, superpower: string, humilityScore: number): Superhero {
    const newSuperhero = { name, superpower, humilityScore };
    this.superheroes.push(newSuperhero);
    return newSuperhero;
  }

  getSuperheroes(): Superhero[] {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
