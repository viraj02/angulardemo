import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { RegistrationComponent } from './registration/registration.component';


/**
 * Core component only to be created.
 * Means component only loading when app is initilized.
 */
@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class CoreModule { }
