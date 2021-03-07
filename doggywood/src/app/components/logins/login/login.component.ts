import { Component, OnInit } from "@angular/core";
import { Router  } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  NgForm,
} from "@angular/forms";
import { AuthenticationService } from "src/app/services/auth/authentication.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loading: boolean = false;
  returnUrl: string;

  isLoginPage: boolean;
  panelTitle: string;
  loggedIn: boolean;
  adminLogin: string = "Admin Login";
  message: string;
  admin: boolean = false;
  email: string;
  public id: number;
  public backupId: number;
  password: string;
  validLogin: boolean = false;
  errorMessage: string = "";
  constructor(
    public authenticationService: AuthenticationService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.isLoginPage = true;
    this.panelTitle = "CLIENT LOGIN";
    this.logout();
  }

  handleLogin() {
    // EMPLOYEE LOGIN
    if (this.admin) {
      this.loading = true;
      this.authenticationService
        .loginEmp(this.email, this.password)
        .pipe(first())
        .subscribe(
          (data) => {
            console.log(data);
            if (data !== null) {
              this.id = this.authenticationService.getEmpId();
              console.log("emp liftoff: " + this.id);
              this.router.navigate([`vetLanding`]);
              this.loading = false;
            } else {
              this.errorMessage = "Oops, wrong email or password!";
              this.router.navigate(["/login"]);
              this.errorReset();
            }
          },
          (error) => {
            console.log("errorLoginWaiting", error);
          }
        );
        // CUSTOMER LOGIN
    } else if (!this.admin) {
      this.loading = true;
      this.authenticationService
        .loginCust(this.email, this.password)
        .pipe(first())
        .subscribe(
          (data) => {
            console.log(data);
            if (data !== null) {
              this.id = this.authenticationService.getCustId();
              console.log("cust liftoff: " + this.id);
              this.router.navigate([`clients/${this.id}`]);
              this.loading = false;

            } else {
              this.errorMessage = "Oops, wrong email or password!";
              this.router.navigate(["/login"]);
              this.errorReset();
            }
          },
          (error) => {
            console.log("errorLoginWaiting", error);
          }
        );
    }
  }

  errorReset() {
    setTimeout(() => {
      this.logout();
    }, 2000);
  }

  getId() {
    return this.authenticationService.getCustId();
  }

  adminButton() {
    this.admin = this.admin === true ? false : true;
    this.adminLogin = this.admin === true ? "Client Login" : "Admin Login";
    this.panelTitle = this.admin === true ? "ADMINISTRATION" : "CLIENT LOGIN";
  }

  logout() {
    this.authenticationService.logout();
    this.loading = false;
    this.errorMessage = "";
    this.email = "";
    this.password = "";
  }
}
