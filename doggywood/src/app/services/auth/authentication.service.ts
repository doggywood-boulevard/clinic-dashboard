import { Injectable } from "@angular/core";
import { Customer } from "../../models/customer";
import { Employee } from "../../models/employee";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { map } from "rxjs/operators";
import { CliLandingService } from "../cli-landing.service";
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


  private empSubject: BehaviorSubject<Employee>;
  public empObject: Employee;
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
      JSON.parse(localStorage.getItem("cust"))
    );
    this.custObservable = this.custSubject.asObservable();

    this.empSubject = new BehaviorSubject<Employee>(
      JSON.parse(localStorage.getItem("emp"))
    );
    this.custObservable = this.custSubject.asObservable();
  }

  // GETTERS
  public get custValue(): Customer {
    return this.custSubject.value;
  }
  public get empValue(): Employee {
    return this.empSubject.value;
  }
  public authenticateCust(email, password) {
    // CHECK DB CUST TABLE
    this.postCustomerAuth(email, password).subscribe(
      (response) => {
        this.custObject = response;
        if (this.custObject !== (null || undefined)) {
          localStorage.setItem("cust", JSON.stringify(this.custObject));
        }
      },
      (response) => {
        console.log("subscribeERROR: " + response.error);
        this.custObject = null;
      }
    );
    return this.custObject !== null ? true : false;
  }

  public authenticateEmp(email, password) {
    // CHECK DB EMP TABLE
    this.postEmployeeAuth(email, password).subscribe(
      (response) => {
        this.empObject = response;
        if (this.empObject !== (null || undefined)) {
          localStorage.setItem("emp", JSON.stringify(this.empObject));
        }
      },
      (response) => {
        console.log("subscribeERROR: " + response.error);
        this.empObject = null;
      }
    );
    return this.empObject !== null ? true : false;
  }

  public getCustId() {
    console.log("get custId:" + this.custObject.id);
    return this.custObject.id;
  }
  public getEmpId() {
    this.empObject = JSON.parse(localStorage.getItem("emp"));
    console.log("get empId:" + this.empObject.id);
    return this.empObject.id;
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
  public postEmployeeAuth(
    email: string,
    password: string
  ): Observable<Employee> {
    return this.http.post<Employee>(`${this.emp_url}/login`, {
      email,
      password
    })
    .pipe(
      map((emp) => {
        localStorage.setItem("emp", JSON.stringify(emp));
        this.empSubject.next(emp);
        return emp;
      })
    );
  }

  // verify Logged in
  public isCustLoggedIn() {
    let cust = localStorage.getItem("cust");
    return !(cust === null); // i.e. true
  }
  public isEmpLoggedIn() {
    let emp = localStorage.getItem("emp");
    return !(emp === null); // i.e. true
  }

  public logout() {
    localStorage.removeItem("cust");
    localStorage.removeItem("emp");
    this.custSubject.next(null);
    this.empSubject.next(null);
    this.router.navigate(["/login"]);
  }

}
