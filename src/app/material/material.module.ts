import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';


const MATERIAL_MODULE = [
  MatInputModule, MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule
];


@NgModule({
  declarations: [],
  imports: MATERIAL_MODULE,
  exports: MATERIAL_MODULE
})
export class MaterialModule { }
