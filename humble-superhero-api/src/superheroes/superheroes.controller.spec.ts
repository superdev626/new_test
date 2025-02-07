import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesController } from './superheroes.controller';
import { SuperheroesService } from './superheroes.service';

describe('SuperheroesController', () => {
  let controller: SuperheroesController;
  let service: SuperheroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroesController],
      providers: [SuperheroesService],
    }).compile();

    controller = module.get<SuperheroesController>(SuperheroesController);
    service = module.get<SuperheroesService>(SuperheroesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should add a superhero', async () => {
    const newSuperhero = {
      name: 'Spider-Man',
      superpower: 'Webbing',
      humilityScore: 8,
    };
    
    const result = await controller.addSuperhero(newSuperhero);
    if ('name' in result) {
      expect(result.name).toBe('Spider-Man');
      expect(result.superpower).toBe('Webbing');
      expect(result.humilityScore).toBe(8);
    } else {
      expect(result.message).toBeUndefined();
    }
  });

  it('should return superheroes sorted by humility score', async () => {
    const newSuperhero1 = {
      name: 'Superman',
      superpower: 'Flying',
      humilityScore: 9,
    };
    const newSuperhero2 = {
      name: 'Batman',
      superpower: 'Martial Arts',
      humilityScore: 7,
    };
    
    await controller.addSuperhero(newSuperhero1);
    await controller.addSuperhero(newSuperhero2);
   
    const superheroes = await controller.getSuperheroes();
    expect(superheroes[0].name).toBe('Superman');
    expect(superheroes[1].name).toBe('Batman');
  });
});
