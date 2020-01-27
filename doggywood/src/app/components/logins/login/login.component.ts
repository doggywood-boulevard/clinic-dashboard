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
  isLoginPage:boolean;
  panelTitle: string;
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
    this.authenticationService.deleteSession();
    sessionStorage.removeItem('empId');
    this.panelTitle = "CUSTOMER LOGIN";
    this.message = ``;
  }

  handleLogin() {
    if (this.admin) {
      console.log(this.email);
      this.authenticationService.authenticateEmp(this.email, this.password);
      console.log("logged in as employee: " + this.onAdminSubmit());
      this.id = this.authenticationService.getEmpId()
      if (this.onAdminSubmit() === true) {
        this.backupId = parseInt(sessionStorage.getItem('empId'));
        // not passing in params, but ready to:
        this.id = (this.id !== (null || undefined) ? this.id : this.backupId)
        console.log("emp liftoff: " + this.id);
        this.router.navigate([`vetLanding`]);
      } else {
        this.logout();
      }

    } else if (!this.admin) {
      console.log(this.email);
      this.authenticationService.authenticateCust(this.email, this.password);
      console.log("logged in as customer: " + this.onLoginSubmit());
      this.id = this.authenticationService.getCustId()
      if (this.onLoginSubmit() === true) {
        setTimeout(() => {
          this.backupId = parseInt(sessionStorage.getItem('custId'));
          this.id = (this.id !== (null || undefined) ? this.id : this.backupId)
          console.log("cust liftoff: " + this.id);
          this.router.navigate([`clients/${this.id}`]);
        }, 1000);

      } else {
        this.logout();
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
    this.panelTitle = (this.admin === true) ? "ADMIN LOGIN" : "LOGIN";
  }

  logout() {
    this.authenticationService.deleteSession();
    this.errorMessage = '';
    // this.ngOnInit();

  }
}
