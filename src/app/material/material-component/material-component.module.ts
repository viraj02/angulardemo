import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableOneComponent } from './table-one/table-one.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    TableOneComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    TableOneComponent,
  ]
})
export class MaterialComponentModule { }
