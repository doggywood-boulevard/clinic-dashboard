import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Employee } from '../models/employee';
import { Observable, throwError } from 'rxjs';
import { CliLandingService } from './cli-landing.service';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';

export class CustomerWelcomeBean {
  constructor(public message: string) { }

}
export class CustomerDataBean {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  customerObject: Customer = null; // session OBJECT
  employeeObject: Employee = null;
  loggedIn = false;
  // emp_url: string = "";
  object: any;
  number: number;
  constructor(private cliLandingService: CliLandingService, private http: HttpClient) { }

  url = 'http://localhost:8080/customer-welcome/profile';
  emp_url = "http://localhost:8080/employee-welcome/profile";

  public authenticate(email, password) {
    // CHECK DB CUST TABLE
    this.getCustomerAuth(email, password).subscribe((response) => {
      // console.log("subscribe: " + response.email);
      this.customerObject = response;
      if (this.customerObject !== null) {
        sessionStorage.setItem("custId", (this.customerObject.id).toString());
        sessionStorage.setItem("firstName", this.customerObject.firstName);
        sessionStorage.setItem("lastName", this.customerObject.lastName);
        sessionStorage.setItem("email", this.customerObject.email);
        sessionStorage.setItem("phone", this.customerObject.phone);
        sessionStorage.setItem("cusUrl", this.customerObject.cusUrl);
        sessionStorage.setItem("authUser", this.customerObject.email);
        //  return   this.passCheck(email, password, this.customerObject);
        return  this.customerObject;
      }
    },
      (response) => {
        console.log("subscribe: " + response.error);
        return this.customerObject = null;
      }
   
    ); 
 
    // CHECK DB EMP TABLE
    this.getEmployeeAuth(email, password).subscribe((response) => {
      // console.log("subscribe: " + response.email);
      this.employeeObject = response;
      if (this.employeeObject !== null) {
        sessionStorage.setItem("empId", (this.employeeObject.id).toString());
        sessionStorage.setItem("eType", (this.employeeObject.eType).toString());
        sessionStorage.setItem("firstName", this.employeeObject.firstName);
        sessionStorage.setItem("lastName", this.employeeObject.lastName);
        sessionStorage.setItem("email", this.employeeObject.email);
        sessionStorage.setItem("phone", this.employeeObject.phone);
        sessionStorage.setItem("authEmployee", this.employeeObject.email);
        // return  this.passCheck(email, password, this.employeeObject);
         return this.employeeObject;
      }
    },
      (response) => {
        console.log("subscribe: " + response.error);
        return this.employeeObject = null;
      }
    );
  
    return (this.customerObject !== null) || (this.employeeObject !== null)?true:false; 
  }

  public passCheck(email, password, object) {
    if (email === "admin" && password === "password") {
      sessionStorage.setItem("authEmployee", email);
      // this.makeEmpSessionData(); // make session data
      console.log('after1: ' + this.isEmpLoggedIn());
      // return true;

    } else if (email === object.email && password === object.password) {
      sessionStorage.setItem("authUser", object.email);
      // this.makeSessionData(); // make session data
      console.log('after2: ' + this.isCustLoggedIn());
      // return true;

    } else if (email === object.email && password === object.password) {
      sessionStorage.setItem("authEmployee", object.email);
      // this.makeEmpSessionData(); // make session data
      console.log('after3: ' + this.isEmpLoggedIn());
      // return true;

    }

  }
  public getClientDataByEmail(email) {
    this.cliLandingService.getClientByEmail(email).subscribe(
      data => this.customerObject = data
    );

  }
  public makeSessionData() {
    // Customers
    if (this.customerObject !== null) {
      sessionStorage.setItem("custId", (this.customerObject.id).toString()); sessionStorage.setItem("firstName", this.customerObject.firstName);
      sessionStorage.setItem("lastName", this.customerObject.lastName);
      sessionStorage.setItem("email", this.customerObject.email);
      sessionStorage.setItem("phone", this.customerObject.phone);
      sessionStorage.setItem("cusUrl", this.customerObject.cusUrl)
    }
  }

  public makeEmpSessionData() {
    // Employees
    if (this.employeeObject !== null) {
      sessionStorage.setItem("empId", (this.employeeObject.id).toString());
      sessionStorage.setItem("eType", (this.employeeObject.eType).toString());
      sessionStorage.setItem("firstName", this.employeeObject.firstName);
      sessionStorage.setItem("lastName", this.employeeObject.lastName);
      sessionStorage.setItem("email", this.employeeObject.email);
      sessionStorage.setItem("phone", this.employeeObject.phone);
    }
  }

  public getCustomerAuth(email: string, password: string): Observable<Customer> {
    console.log(email + ' ' + password)
    return this.http.get<Customer>(`${this.url}/${email}`);
  }

  public getEmployeeAuth(email: string, password: string): Observable<Employee> {
    console.log(email + ' ' + password)
    return this.http.get<Employee>(`${this.emp_url}/${email}`);
  }

  public isCustLoggedIn() {
    let user = sessionStorage.getItem('authUser')
    return !(user === null) // i.e. true
  }
  public isEmpLoggedIn() {
    let user = sessionStorage.getItem('authEmployee')
    return !(user === null) // i.e. true
  }

  public logout() {
    // Customers
    sessionStorage.removeItem('authUser');
    sessionStorage.removeItem("custId");
    sessionStorage.removeItem("firstName");
    sessionStorage.removeItem("lastName");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("phone");
    sessionStorage.removeItem("cusUrl");
    // Employees
    sessionStorage.removeItem('authEmployee');
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("firstName");
    sessionStorage.removeItem("lastName");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("phone");
    sessionStorage.removeItem("eType");
  }
}
