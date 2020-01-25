import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Navigation } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, NgForm } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { ClientsService } from '../../../services/clients.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FooterComponent } from 'src/app/layout/footer/footer.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  panelTitle: string;
  message: string;
  admin: boolean = false;
  email: string;
  password: string;
  validLogin: boolean = false;
  errorMessage: string = '';
  constructor(private clientService: ClientsService, private authenticationService: AuthenticationService, private router: Router, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.authenticationService.logout(); 
    sessionStorage.removeItem('empId');
    this.panelTitle = "LOGIN";
    this.message = `
    Customer:  user or any email admiral@nelson.com   
    Employee:     admin (or any) 
    all pw's:  password`;
  }

  handleLogin() {
    if (this.admin) { 
      this.validLogin =  this.onAdminSubmit();
      console.log("logged in as employee: "+this.validLogin); 
      this.router.navigate(['vetLanding']);

    } else if (!this.admin) { 
      this.validLogin = this.onLoginSubmit();
      console.log("logged in as customer: "+this.validLogin);
      this.router.navigate(['clients'])

    }
    if (!this.validLogin) {
      this.errorMessage = "Oops, password doesn't match"
      console.log("logged in?: "+this.validLogin)
      this.validLogin = false;

       this.router.navigate([''])
    }

    //REDIRECT TO Employee Landing
    if (this.authenticationService.isCustLoggedIn() !== null) {

    }
    else if (this.authenticationService.isEmpLoggedIn()) {
 
    } 
  } 

  // returns true if email/password in Employee DB
  onAdminSubmit() {
    return this.authenticationService.authenticateEmp(this.email, this.password);
  }

  // returns true if email/password in Customer DB
  onLoginSubmit() {
    return this.authenticationService.authenticateCust(this.email, this.password);
  }

  adminButton() {
    this.admin = (this.admin === true) ? false : true;
    this.panelTitle = (this.admin === true) ? "ADMIN LOGIN" : "LOGIN";
  }
  
  logout() {
    sessionStorage.removeItem("authUser");
    sessionStorage.removeItem("authEmployee");
    this.errorMessage = '';
    sessionStorage.removeItem('empId');
    // this.ngOnInit();

  }
}
