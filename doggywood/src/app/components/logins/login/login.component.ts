import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Navigation } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, NgForm } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { ClientsService } from '../../../services/clients.service';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { FooterComponent } from 'src/app/layout/footer/footer.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginPage:boolean;
  panelTitle: string;
  loggedIn: boolean;
  adminLogin:string = 'Admin Login';
  message: string;
  admin: boolean = false;
  email: string;
  public id: number;
  public backupId: number;
  password: string;
  validLogin: boolean = false;
  errorMessage: string = '';
  constructor(private clientService: ClientsService, public authenticationService: AuthenticationService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.isLoginPage = true;
    this.panelTitle = "CLIENT LOGIN";
  }

  handleLogin() {
    if (this.admin) {
      this.loggedIn = this.authenticationService.authenticateEmp(this.email, this.password);
      console.log("logged in as employee: " + this.loggedIn );
      if (this.loggedIn === true) {
        setTimeout(() => {
        this.id = this.authenticationService.getEmpId();
        console.log("emp liftoff: " + this.id);
        this.router.navigate([`vetLanding`]);
      }, 1500);
      } else {
        this.router.navigate([`login`]);
        this.errorMessage = "Oops, wrong email or password!";
      }

    } else if (!this.admin) {
      this.loggedIn = this.authenticationService.authenticateCust(this.email, this.password);
      console.log("logged in as customer: " + this.loggedIn);

      if (this.loggedIn === true) {
        setTimeout(() => {
          this.id = this.authenticationService.getCustId();
          console.log("cust liftoff: " + this.id);
          this.router.navigate([`clients/${this.id}`]);
        }, 1500);
      } else {
        // this.router.navigate([`login`]);
        console.log("not logged in!");
        this.errorMessage = "Oops, wrong email or password!";
        setTimeout(() => {
          console.log("errorWaiting");
          this.errorMessage = '';
        }, 2000);
        this.authenticationService.logout();
      }
    }
  }
  getId() {
    return this.authenticationService.getCustId();
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
    this.adminLogin = (this.admin === true) ? 'Client Login' : 'Admin Login';
    this.panelTitle = (this.admin === true) ? "ADMINISTRATION" : "CLIENT LOGIN";
  }

  logout() {
    this.authenticationService.logout();
    this.errorMessage = '';
  }
}
