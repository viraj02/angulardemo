import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userRegistrationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initilizeForms();

    this.addAlternateMobileNo();
  }

  // Initilize form
  initilizeForms(): void {
    this.userRegistrationForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        address: this.formBuilder.group({
          state: ['', [Validators.required]],
          city: ['', [Validators.required]],
          postal: ['', [Validators.required]]
        }),
        mobileNumbers: this.formBuilder.array([]),
        email: ['', [Validators.required]]
      }
    );
  }

  // convenience getters for easy access to form fields
  get f() { return this.userRegistrationForm.controls; }

  get alternateMobileNo() { return this.userRegistrationForm.get('mobileNumbers') as FormArray; }


  addAlternateMobileNo(): void {
    this.alternateMobileNo.push(this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern('^[0-9]*$')
    ]));
  }

  /** @param mobNoIndex Control index number */
  removeAlternateMobileNo(mobNoIndex: number): void {
    // Index zero mobile number field can't be removed
    if (mobNoIndex === 0) return;
    this.alternateMobileNo.removeAt(mobNoIndex);
  }

  // Register button click event
  userRegisterEvent(): void {
    console.log(this.f);
  }

}
