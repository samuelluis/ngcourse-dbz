import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class DbzListComponent {
  @Output() editChar: EventEmitter<Character> = new EventEmitter();
  @Output() deleteChar: EventEmitter<Character> = new EventEmitter();
  @Input() characters: Character[] = [];

  select2Edit(character: Character) {
    this.editChar.emit(character);
  }

  select2Delete(character: Character) {
    if(confirm(`Are you sure you want to delete ${character.name}?`))
      this.deleteChar.emit(character);
  }
}
