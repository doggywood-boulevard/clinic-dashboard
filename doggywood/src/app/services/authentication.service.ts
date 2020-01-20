import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Observable, throwError  } from 'rxjs';
import { ClientsService } from './clients.service';
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

  loggedIn = false;
  cust_login: string="http://localhost:8080/customer-welcome/login/";

  constructor(private clientsService: ClientsService,   private http: HttpClient ) { }

  url = 'http://localhost:8080/customer-welcome/login/';

  public authenticate(email, password) { 

    if (email === "admin" && password === "password") {
      console.log('before ' + this.isEmpLoggedIn());
      sessionStorage.setItem("authEmployee", email);
      console.log('after ' + this.isEmpLoggedIn());
      return true;

    } else if (email === "user" && password === "password") {
      console.log('before ' + this.isCustLoggedIn());
      sessionStorage.setItem("authUser", email);
      console.log('before ' + this.isCustLoggedIn());
      return true;
    }
    return false;
  }


   public getCustomerAuth(email: string, pasword: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.cust_login}/?email=sunday@sun.com&password=sunpassword`);
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

    sessionStorage.removeItem('authEmployee')
  } 
}
