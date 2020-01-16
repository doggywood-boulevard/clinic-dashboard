import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../../../models/register';
import { FormGroup, FormBuilder, Validators,  } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title: string = "";
  user: RegisterModel = new RegisterModel();
  registerForm: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
   this.title = "REGISTER"; 

    this.registerForm = this.formBuilder.group({
      'fname': [this.user.fname, [
        Validators.required
      ]],
      'email': [this.user.email, [
       Validators.required,
       Validators.email 
      ]],
      'password': [this.user.password, [
     Validators.required,
       Validators.minLength(4),
       Validators.maxLength(30) 
        
      ]]
    });
  }

  onRegisterSubmit() {
    alert(this.user.fname + ' ' + this.user.email + ' ' + this.user.password);
  }
}
