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
    this.authenticationService.logout();
      sessionStorage.removeItem('empId');
    this.errorMessage = '';
    this.panelTitle = "LOGIN";
    this.message = `
    Customer:  user or any email admiral@nelson.com   
    Employee:     admin (or any) 
    all pw's:  password`;
  }
  handleLogin() {
    this.onLoginSubmit();
       this.router.navigate(['vetLanding'])
  // sessionStorage.setItem("authEmployee", email);
      //REDIRECT TO Employee Landing
      if (this.authenticationService.isCustLoggedIn()!==null) {
        console.log("logged in as customer")   
        this.invalidLogin = false; 
       this.router.navigate(['clients'])
      } 
    else  if (this.authenticationService.isEmpLoggedIn() ) { 
        console.log("logged in as employee");
        this.invalidLogin = false;
       this.router.navigate(['vetLanding'])

        //REDIRECT TO Client Landing
      // } else if (this.authenticationService.isCustLoggedIn()) {
  }   else  {
      this.errorMessage = "Oops, password doesn't match" 
      this.invalidLogin = true;
    }
   
  }


  logout() {
    sessionStorage.removeItem("authUser");
    sessionStorage.removeItem("authEmployee");

  }
 
  onLoginSubmit() {
    return this.authenticationService.authenticate(this.email, this.password); 
  }
}
