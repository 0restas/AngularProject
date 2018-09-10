import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit  {
  register = 'Register';

  email = new FormControl('', [Validators.required, Validators.max(50), Validators.email]);
  name = new FormControl('', [Validators.required, Validators.max(15), Validators.min(4)]);
  password = new FormControl('', [Validators.required, Validators.min(6)]);
  hide = true;

  ngOnInit() {
    
  }

  getErrorName() {
    return this.name.hasError('required') ? 'You must enter a value' :
    this.name.hasError('minlength') ? 'Your name is too short' :       
    this.name.hasError('maxlength') ? 'Your name is too long' :       
    '';
  }
  getErrorPassworda() {
    return this.password.hasError('required') ? 'You must enter a value' :
    this.password.hasError('minlength') ? 'Your password is too short' :              
    '';
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
    this.email.hasError('maxlength') ? 'Your email is too long' :       
    this.email.hasError('email') ? 'Not a valid email' :
        
        '';
  }
}
