import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Employee } from '../models/employee';
import { Observable, throwError } from 'rxjs';
import { ClientsService } from './clients.service';
import { CliLandingService } from './cli-landing.service';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
//getClientByEmail
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
  public customerList: Customer[] = [];
  public customer: Customer; // session OBJECT
  public employee: Employee;
  loggedIn = false;
  // cust_login: string="http://localhost:8080/customer-welcome/login/";
  number: number;
  constructor(private cliLandingService: CliLandingService, private ClientsService: ClientsService, private http: HttpClient) { }

  url = 'http://localhost:8080/customer-welcome/profile';
  emp_url = 'http://localhost:8080/employee-welcome/profile';

  allCustomer: Observable<Customer[]> = this.ClientsService.getCustomers();


  public authenticate(email, password) {

    this.getCustomerAuth(email, password).subscribe((response) => {
        this.customer = response;
        sessionStorage.setItem("authUser", this.customer.email);
      console.log("auth.getCustomerAuth( " + this.customer.email);
    },
      (response) => {
        return "Sorry it failed";
      }
    ); 

    this.getEmployeeAuth(email, password).subscribe((response) => {
          this.employee = response;
           sessionStorage.setItem("authEmployee", this.employee.email);
      console.log("auth.getemployee-Auth( " + this.employee);
    },
      (response) => {
        return "Sorry it failed";
      }
    ); // get email's OBJECT  
    // if (this.customer && email === this.customer.email && password === this.customer.password) { // 
    //   console.log('before logged in: ' + this.customer.email + ' ' + 'logged-in: ' +
    //     this.isCustLoggedIn());
 
    //   console.log('customer after ' + this.isCustLoggedIn());

    // } else if (this.employee && email === this.employee.email && password === this.employee.password) { // 
    //   console.log('before logged in: ' + this.employee.email + ' ' + 'logged-in: ' +
    //     this.isEmpLoggedIn());

     
    //   console.log('employee after ' + this.isEmpLoggedIn());

    // }
    // this.makeSessionData(); // make session data
    return (this.isCustLoggedIn() || this.isEmpLoggedIn()) ? true : false;
  }
  // GET EMAIL, then get OBJECT AND PUT IN SESSION STORAGE
  public getClientDataByEmail(email) {
    this.cliLandingService.getClientByEmail(email).subscribe(
      data =>
        this.customer = data
    );
  }
  public makeSessionData() {
    //  console.log(this.customer.cusUrl)
    //  sessionStorage.setItem("custId", (this.customer.id).toString());//this.number.toString());
    //  sessionStorage.setItem("firstName", this.customer.firstName);
    //  sessionStorage.setItem("lastName", this.customer.lastName);
    //  sessionStorage.setItem("email", this.customer.email);
    //  sessionStorage.setItem("phone", this.customer.email);
    //  sessionStorage.setItem("cusUrl", this.customer.cusUrl) 
  }

  public getCustomerAuth(email: string, password: string): Observable<Customer> {
    console.log("hey-email: " + email + ' ' + password)
    return this.http.get<Customer>(`${this.url}/${email}`);
  }

  public getEmployeeAuth(email: string, password: string): Observable<Employee> {
    console.log("hey-email: " + email + ' ' + password)
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
    sessionStorage.removeItem('authEmployee');
    sessionStorage.removeItem('authUser');
    sessionStorage.removeItem("custId");
    sessionStorage.removeItem("firstName");
    sessionStorage.removeItem("lastName");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("phone");
    sessionStorage.removeItem("cusUrl");
    sessionStorage.removeItem('authEmployee')
  }
}
