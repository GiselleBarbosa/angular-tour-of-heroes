import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from '../model/hero';
import { HEROES } from '../model/mock-heroes';
import { MessageService } from './message.service';



@Injectable({ providedIn: 'root' })
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: encontrado hero id: ${id} (${hero.name})`);
    return of(hero);
  }
}