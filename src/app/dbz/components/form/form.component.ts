import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'dbz-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class DbzFormComponent implements OnChanges {
  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter()
  @Output() onEditCharacter: EventEmitter<Character> = new EventEmitter()
  @Input() selectedChar!: Character;

  character: Character = {name: '', power: 0};
  editing: boolean = false;

  constructor() { }

  ngOnChanges(): void {
    this.character = {... this.selectedChar};
    if(this.selectedChar.name) this.editing = true;
  }

  submit() {
    if(this.editing) {
      this.selectedChar.name = this.character.name;
      this.selectedChar.power = this.character.power;
      this.onEditCharacter.emit(this.selectedChar);
    }
    else this.onNewCharacter.emit(this.character);
    this.reset();
  }

  reset() {
    this.editing = false;
    this.character = {name: '', power: 0};
  }

}
