import { Injectable } from "@angular/core";
import { Customer } from "../models/customer";
import { Employee } from "../models/employee";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { map } from "rxjs/operators";
import { CliLandingService } from "./cli-landing.service";
import {
  HttpHeaders,
  HttpErrorResponse,
  HttpClient,
} from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

export class CustomerWelcomeBean {
  constructor(public message: string) {}
}
export class CustomerDataBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private custSubject: BehaviorSubject<Customer>;
  private custObservable: Observable<Customer>;
  public custObject: Customer; // session OBJECT
  public custId: number;
  public employeeObject: Employee;
  public empId: number;

  loggedIn = false;
  object: any;
  url = `${environment.baseUrl}/customer-welcome/profile`;
  emp_url = `${environment.baseUrl}/employee-welcome/profile`;

  constructor(
    private cliLandingService: CliLandingService,
    private http: HttpClient,
    private router: Router
  ) {
    this.custSubject = new BehaviorSubject<Customer>(
      JSON.parse(localStorage.getItem("custObservable"))
    );
    this.custObservable = this.custSubject.asObservable();
  }
  public get custValue(): Customer {
    return this.custSubject.value;
  }

  public authenticateCust(email, password) {
    // CHECK DB CUST TABLE
    this.postCustomerAuth(email, password).subscribe(
      (response) => {
        this.custObject = response;
        if (this.custObject !== (null || undefined)) {
          this.custObject.id != null
            ? (this.custId = this.custObject.id)
            : (this.custId = null);
          console.log("subscribeId: " + this.custId);
          console.log(this.custObject);
          localStorage.setItem("cust", JSON.stringify(this.custObject));
        }
      },
      (response) => {
        console.log("subscribe: " + response.error);
        this.custObject = null;
      }
    );
    return this.custObject !== null ? true : false;
  }

  public authenticateEmp(email, password) {
    // CHECK DB EMP TABLE
    this.getEmployeeAuth(email, password).subscribe(
      (response) => {
        this.employeeObject = response;
        console.log("subscribeEmpl: " + response.email);
        if (this.employeeObject !== (null || undefined)) {
          this.empId = this.employeeObject.id;
          console.log(this.employeeObject);
          this.makeEmpSessionData(this.employeeObject);
        }
      },
      (response) => {
        console.log("subscribe: " + response.error);
        this.employeeObject = null;
      }
    );
    return this.employeeObject !== null ? true : false;
  }
  // get ids

  public getCustId() {
    console.log("get custId:" + this.custObject.id);
    return this.custObject.id;
  }
  public getEmpId() {
    console.log("get empId:" + this.empId);
    return this.empId;
  }

  // get cust data from email
  public getClientDataByEmail(email) {
    this.cliLandingService
      .getClientByEmail(email)
      .subscribe((data) => (this.custObject = data));
  }

  public postCustomerAuth(
    email: string,
    password: string
  ): Observable<Customer> {
    console.log(email + " " + password);
    return this.http
      .post<Customer>(`${this.url}/login`, {
        email,
        password,
      })
      .pipe(
        map((cust) => {
          localStorage.setItem("cust", JSON.stringify(cust));
          this.custSubject.next(cust);
          return cust;
        })
      );
  }
  public getEmployeeAuth(
    email: string,
    password: string
  ): Observable<Employee> {
    console.log(email + " " + password);
    return this.http.get<Employee>(`${this.emp_url}/${email}`);
  }

  // verify Logged in
  public isCustLoggedIn() {
    let cust = localStorage.getItem("cust");
    return !(cust === null); // i.e. true
  }
  public isEmpLoggedIn() {
    let user = sessionStorage.getItem("authEmployee");
    return !(user === null); // i.e. true
  }

  public logout() {
    this.deleteSession();   /// for EMPS -de[recated] remove!!
    localStorage.removeItem("cust");
    this.custSubject.next(null);
    this.router.navigate(["/login"]);
  }


  public makeEmpSessionData(employeeObject) {
    // Employees
    if (employeeObject !== null) {
      sessionStorage.setItem("empId", employeeObject.id.toString());
      sessionStorage.setItem("eType", employeeObject.eType.toString());
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

    // Employees
    sessionStorage.removeItem("authEmployee");
    sessionStorage.removeItem("empId");
    sessionStorage.removeItem("firstName");
    sessionStorage.removeItem("lastName");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("phone");
    sessionStorage.removeItem("eType");
  }
}
