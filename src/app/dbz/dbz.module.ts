import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main.page';
import { DbzFormComponent } from './components/form/form.component';
import { DbzListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    MainPageComponent,
    DbzFormComponent,
    DbzListComponent
  ],
  exports: [MainPageComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
