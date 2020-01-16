import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../../models/login';
import { FormGroup, FormBuilder, Validators,  } from '@angular/forms';

@Component({
  selector: 'app-emp-vet-login',
  templateUrl: './emp-vet-login.component.html',
  styleUrls: ['./emp-vet-login.component.css']
})
export class EmpVetLoginComponent implements OnInit {

  title: string = "";
  user: LoginModel = new LoginModel();
  loginForm: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
   this.title = "LOGIN"; 

    this.loginForm = this.formBuilder.group({ 
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

  onLoginSubmit() {
    alert( this.user.email + ' ' + this.user.password);
  }
}
