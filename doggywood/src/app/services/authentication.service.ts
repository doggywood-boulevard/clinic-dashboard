import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Observable, throwError  } from 'rxjs';
import { CliLandingService } from './cli-landing.service';
import {  HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
 
export class CustomerWelcomeBean {
  constructor(public message:string) { }

}
export class CustomerDataBean {
   constructor(public message:string) { }
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public customerObject: Customer; // session OBJECT
  loggedIn = false;
  cust_login: string="http://localhost:8080/customer-welcome/login/";
  number: number;
  constructor( private cliLandingService: CliLandingService, private http: HttpClient ) { }

  url = 'http://localhost:8080/customer-welcome/profile/';

  public authenticate(email, password) { 

  this.getCustomerAuth(email, password)   // AUTH later
  
    if (email === "admin" && password === "password") { //
      console.log('before ' + this.isEmpLoggedIn());
      sessionStorage.setItem("authEmployee", email);
      console.log('after ' + this.isEmpLoggedIn());

      this.getClientDataByEmail(email); // get CUST DAT
 this.makeSessionData(); // make session data
      return true; 
    } else if (email === "user" && password === "password") {
      console.log('before ' + this.isCustLoggedIn());
      sessionStorage.setItem("authUser", email);
      console.log('before ' + this.isCustLoggedIn());
      return true;
    
    }
    return false;
  }
  // GET EMAIL, then get OBJECT AND PUT IN SESSION STORAGE
   public getClientDataByEmail(email) {
    this.cliLandingService.getClientByEmail(email).subscribe(
      data => this.customerObject = data  
      ); 
 
  }
  public makeSessionData() {
    //  console.log(this.customerObject.cusUrl)
    //  sessionStorage.setItem("custId", (this.customerObject.id).toString());//this.number.toString());
    //  sessionStorage.setItem("firstName", this.customerObject.firstName);
    //  sessionStorage.setItem("lastName", this.customerObject.lastName);
    //  sessionStorage.setItem("email", this.customerObject.email);
    //  sessionStorage.setItem("phone", this.customerObject.email);
    //  sessionStorage.setItem("cusUrl", this.customerObject.cusUrl) 
  }
   public getCustomerAuth(email: string, password: string): Observable<Customer> {
     console.log(email + ' ' + password)
    return this.http.get<Customer>(`${this.url}/${email}`);
  }

  public isCustLoggedIn() {
    let user = sessionStorage.getItem('authUser')
    return !(user === null) // i.e. true
  }
  public isEmpLoggedIn() {
    let user = sessionStorage.getItem('authEmployee')
    return !(user === null) // i.e. true
  }

  public  logout() {
    sessionStorage.removeItem('authUser');
   sessionStorage.removeItem("custId") ;
     sessionStorage.removeItem("firstName");
    sessionStorage.removeItem("lastName");
   sessionStorage.removeItem("email");
    sessionStorage.removeItem("phone");
     sessionStorage.removeItem("cusUrl"); 

    sessionStorage.removeItem('authEmployee')
  } 
}
