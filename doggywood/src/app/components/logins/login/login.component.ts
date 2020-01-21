import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Navigation } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, NgForm } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { ClientsService } from '../../../services/clients.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  panelTitle: string;
  message: string;

  email: string;
  password: string;
  invalidLogin: boolean = true;
  errorMessage: string;
  
  constructor(private clientService: ClientsService, private authenticationService: AuthenticationService, private router: Router, private activatedRoute: ActivatedRoute) { }


  ngOnInit() { 

    sessionStorage.removeItem('authUser'); 
    sessionStorage.removeItem('authEmployee')
    this.errorMessage = '';
    this.panelTitle = "LOGIN";
    this.message = `Customer creds:  user password & 
          Employee creds: admin password`;
  }

  handleLogin() {
    if (this.authenticationService.authenticate(this.email, this.password)) {

      //REDIRECT TO Employee Landing
      if (this.authenticationService.isEmpLoggedIn()) {
        this.router.navigate(['vetLanding'])  // need other if for vetLogin
        console.log("logged in as employee")
        this.invalidLogin = false;

        //REDIRECT TO Client Landing
      } else if (this.authenticationService.isCustLoggedIn()) {
        this.router.navigate(['clients'])
        console.log("logged in as customer")   
        this.invalidLogin = false;
      }

    } else {
      this.errorMessage = "Oops, password doesn't match"
      this.router.navigate([''])
      this.invalidLogin = true;
    }

  }

  logout() {
    sessionStorage.removeItem("authUser");
    sessionStorage.removeItem("authEmployee");

  }

  onLoginSubmit() {
    alert("login username: " + this.email + "password username: " + this.password);
  }
}
