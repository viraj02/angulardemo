import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { RegistrationComponent } from './registration/registration.component';


import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';



/**
 * Core component only to be created.
 * Means component only loading when app is initilized.
 */
@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ]
})
export class CoreModule { }
