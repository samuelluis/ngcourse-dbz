import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character';

@Component({
  selector: 'dbz-main-page',
  templateUrl: 'main.page.html'
})

export class MainPageComponent implements OnInit {
  public characters: Character[] = [
    {name: 'Goku', power: 5000},
    {name: 'Vegeta', power: 4000},
    {name: 'Picolo', power: 3000},
    {name: 'Krilin', power: 1000},
  ];
  selectedChar: Character = {name: '', power: 0};

  constructor() { }

  ngOnInit() { }

  saveNew(character: Character) {
    this.characters.push(character);
  }

  select2Edit(character: Character) {
    this.selectedChar = {name: '', power: 0};
  }

  deleteChar(character: Character) {
    const index = this.characters.findIndex((char) => {
      return char.name == character.name
    });
    if(index >= 0) this.characters.splice(index, 1);
  }
}
