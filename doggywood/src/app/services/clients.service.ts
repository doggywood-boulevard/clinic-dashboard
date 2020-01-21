import { Injectable } from '@angular/core';
import {  HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { Customer } from '../models/customer';
import { catchError } from 'rxjs/operators';


export class CustomerWelcomeBean {
  constructor(public message: string) { }
}


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  base_url: string = 'http://localhost:8080';
  custs_url: string= "http://localhost:8080/customers";
  
  email: string;
  emailUser: string;
  emailEmployee: string;
  public customerObject: Customer; // session OBJECT

 private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  // error handler
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client-side Error getting customers: ', errorResponse.error.message)
    } else {
      console.error('Server Side Error: ', errorResponse);
    }
    return throwError('Oops, there is a problem  ..');
  }
 
  getCustomers(): Observable<Customer[]> { 
     return this.http.get<Customer[]>(this.custs_url)
      .pipe(catchError(this.handleError));
  } 
  // getAllCustomer() :Observable<Customer[]> {
  //   return this.http.get<Customer[]>("http://localhost:3000/customer");
  // }

  getCustomer(id: number): Observable<Customer> {
    // return this.listCustomers.find(u => u.id === id)
    return this.http.get<Customer>(`${this.custs_url}/${id}`) 
      .pipe(catchError(this.handleError));
  }  
    
  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.custs_url, customer, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .pipe(catchError(this.handleError)); 
  } 
  // addCustomer(cust :Customer) :Observable<Customer> {
  //   return this.http.post<Customer>("http://localhost:3000/customer", cust, {headers: this.headers});
  // }
  
  updateCustomer(customer: Customer): Observable<void> {
    return this.http.put<void>(`${this.custs_url}/${customer.id}`, customer, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .pipe(catchError(this.handleError));
  }

  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.custs_url}/${id}`)
      .pipe(catchError(this.handleError));
    
  }
  /// NON CRUD  -- FORMERLY CLI-LANDING
  
  public getSessionEmail() {
    this.emailUser = sessionStorage.getItem('authUser');
    this.emailEmployee = sessionStorage.getItem('authEmployee');
    
    this.email = (this.emailEmployee) ? this.emailEmployee : this.emailUser; 
    console.log(this.email);
    return this.email;
  }
 

  getClientByEmail(email) { 
     return  this.http.get<Customer>(`${this.base_url}/customer-welcome/profile/${email}`);
  }
  // BEAN 
  collectClientBean() {
    return this.http.get<CustomerWelcomeBean>(`${this.base_url}/customer-welcome-bean`);
  } 
}
