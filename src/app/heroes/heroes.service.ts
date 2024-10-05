import { Injectable } from '@angular/core';
import { Hero } from './models';
import { heroes } from './data';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() { }

  getList(): Hero[] {
    return heroes;
  }
}
