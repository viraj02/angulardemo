import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { MainComponent } from './main/main.component';
import { MaterialComponentModule } from '../material/material-component/material-component.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MaterialComponentModule
  ]
})
export class TodoModule { }
