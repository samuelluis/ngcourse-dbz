import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character';
import { DbzService } from '../dbz.service';

@Component({
  selector: 'dbz-main-page',
  templateUrl: 'main.page.html'
})

export class MainPageComponent {
  constructor(public dbzService:DbzService) { }
}
