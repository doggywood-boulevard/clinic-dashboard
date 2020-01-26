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
  public customerObject: Customer; // session OBJECT
  public custId:number;
  public employeeObject: Employee;
  public empId:number;

  loggedIn = false;
  object: any;

  constructor(private cliLandingService: CliLandingService, private http: HttpClient) { }

  url = 'http://localhost:8080/customer-welcome/profile';
  emp_url = "http://localhost:8080/employee-welcome/profile";

  public authenticateCust(email, password) {
    // CHECK DB CUST TABLE
    this.getCustomerAuth(email, password).subscribe((response) => {
      this.customerObject = response;
      if (this.customerObject !== (null || undefined)) {
        this.custId = this.customerObject.id;
        console.log("subscribeId: " + this.custId);
        console.log(this.customerObject);
        this.makeSessionData(this.customerObject);
      }
    },
      (response) => {
        console.log("subscribe: " + response.error);
        this.customerObject = null;
      }
    );
    return (this.customerObject !== null) ? true : false;
  }
  
  public authenticateEmp(email, password) {
    // CHECK DB EMP TABLE
    this.getEmployeeAuth(email, password).subscribe((response) => {
      this.employeeObject = response;
      console.log("subscribeEmpl: " + response.email);
      if (this.employeeObject !== (null || undefined)) {
        this.empId = this.employeeObject.id;
        console.log(this.employeeObject);
        this.makeEmpSessionData(this.employeeObject)

      }
    },
      (response) => {
        console.log("subscribe: " + response.error);
        this.employeeObject = null;
      }
    );
    return (this.employeeObject !== null) ? true : false;
  }
// get ids

  public getCustId() {
    console.log("get custId:" + this.custId)
    return this.custId;
  }
  public getEmpId() {
    console.log("get empId:" + this.empId)
    return this.empId;
  }

  // get cust data from email
  public getClientDataByEmail(email) {
    this.cliLandingService.getClientByEmail(email).subscribe(
      data => this.customerObject = data
    );

  }
  public getCustomerAuth(email: string, password: string): Observable<Customer> {
    console.log(email + ' ' + password)
    return this.http.get<Customer>(`${this.url}/${email}`);
  }

  public getEmployeeAuth(email: string, password: string): Observable<Employee> {
    console.log(email + ' ' + password)
    return this.http.get<Employee>(`${this.emp_url}/${email}`);
  }

  // verify Logged in 
  public isCustLoggedIn() {
    let user = sessionStorage.getItem('authUser')
    return !(user === null) // i.e. true
  }
  public isEmpLoggedIn() {
    let user = sessionStorage.getItem('authEmployee')
    return !(user === null) // i.e. true
  }

  // make session Data
  public makeSessionData(customerObject) {
    // Customers
    if (customerObject !== null) {
      sessionStorage.setItem("custId", (customerObject.id).toString());
      sessionStorage.setItem("firstName", customerObject.firstName);
      sessionStorage.setItem("lastName", customerObject.lastName);
      sessionStorage.setItem("email", customerObject.email);
      sessionStorage.setItem("phone", customerObject.phone);
      sessionStorage.setItem("cusUrl", customerObject.cusUrl);
      // auth session
      sessionStorage.setItem("authUser", customerObject.email);
    }
    return sessionStorage;
  }
  public makeEmpSessionData(employeeObject) {
    // Employees
    if (employeeObject !== null) {
      sessionStorage.setItem("empId", (employeeObject.id).toString());
      sessionStorage.setItem("eType", (employeeObject.eType).toString());
      sessionStorage.setItem("firstName", employeeObject.firstName);
      sessionStorage.setItem("lastName", employeeObject.lastName);
      sessionStorage.setItem("email", employeeObject.email);
      sessionStorage.setItem("phone", employeeObject.phone);
      // auth session
      sessionStorage.setItem("authEmployee", employeeObject.email);
    }
     return sessionStorage;
  }

  // delete session Data
  public deleteSession() {
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
    sessionStorage.removeItem('empId');
    sessionStorage.removeItem("firstName");
    sessionStorage.removeItem("lastName");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("phone");
    sessionStorage.removeItem("eType");
  }

}
