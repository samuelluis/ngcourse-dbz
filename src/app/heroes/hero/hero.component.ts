import { Component } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
 name: string = "Ironman";
 age: number = 45;
 hometown: string = "NY";
}
