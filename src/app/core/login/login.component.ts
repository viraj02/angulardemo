import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userRegistrationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.initilizeForms();
  }

  // initilize login form
  initilizeForms(): void {
    this.userRegistrationForm = this.formBuilder.group(
      {
        email: ['', [Validators.required]],
        password: ['', [Validators.required]]
      }
    )
  }

  // convenience getters for easy access to form fields
  get f() { return this.userRegistrationForm.controls; }

  userLoginEvent(): void { }


  navigate(url: string): void {
    this.route.navigateByUrl(url);
  }

}
