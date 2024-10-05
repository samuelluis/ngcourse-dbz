import { Component, OnInit } from '@angular/core';
import { Hero, Skill } from '../models';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  heroes: Hero[] = [];
  showingAlter: string = '';

  constructor(public service: HeroesService) { }

  ngOnInit() {
    this.heroes = this.service.getList();
  }

}
