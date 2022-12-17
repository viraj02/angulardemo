import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { RegistrationComponent } from './registration/registration.component';


import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './header/header.component';



/**
 * Core component only to be created.
 * Means component only loading when app is initilized.
 */
@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
  ]
})
export class CoreModule { }
