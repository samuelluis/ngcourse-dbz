import { Injectable } from '@angular/core';
import { Character } from './interfaces/character';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [
    {id: uuid(), name: 'Goku', power: 5000},
    {id: uuid(), name: 'Vegeta', power: 4000},
    {id: uuid(), name: 'Picolo', power: 3000},
    {id: uuid(), name: 'Krilin', power: 1000},
  ];
  selectedChar: Character = {id: '', name: '', power: 0};

  constructor() { }

  saveNew(character: Character) {
    this.characters.push({ ...character, id: uuid() });
  }

  select2Edit(character: Character) {
    this.selectedChar = {id: '', name: '', power: 0};
  }

  deleteChar(uid: string) {
    this.characters = this.characters.filter(({id}) => id != uid);
  }
}
