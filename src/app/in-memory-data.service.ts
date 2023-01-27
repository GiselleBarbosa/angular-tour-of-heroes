import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Monkey D. Luffy' },
      { id: 2, name: 'Roronoa Zoro' },
      { id: 3, name: 'Nami' },
      { id: 4, name: 'Usopp' },
      { id: 5, name: 'Sanji' },
      { id: 6, name: 'Chopper' },
      { id: 7, name: 'Nico Robin' },
      { id: 8, name: 'Franky' },
      { id: 9, name: 'Brook' },
      { id: 10, name: 'Jimbe' },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}