import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesService } from './superheroes.service';

describe('SuperheroesService', () => {
  let service: SuperheroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuperheroesService],
    }).compile();

    service = module.get<SuperheroesService>(SuperheroesService);
  });

  it('should add a superhero', () => {
    const superhero = service.addSuperhero('Superman', 'Flying', 9);
    expect(superhero.name).toBe('Superman');
    expect(superhero.superpower).toBe('Flying');
    expect(superhero.humilityScore).toBe(9);
  });

  it('should sort superheroes by humility score', () => {
    service.addSuperhero('Batman', 'Martial Arts', 7);
    service.addSuperhero('Superman', 'Flying', 9);
    const superheroes = service.getSuperheroes();
    expect(superheroes[0].name).toBe('Superman');
    expect(superheroes[1].name).toBe('Batman');
  });
});
