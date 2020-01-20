import { Injectable } from '@angular/core';
import { ClientsService } from './clients.service';
import { Observable, throwError  } from 'rxjs';
import { Customer } from '../models/customer';
import { catchError } from 'rxjs/operators';
import {  HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';

export class CustomerWelcomeBean {
  constructor(public message:string) { }

} 


@Injectable({
  providedIn: 'root'
})
export class CliLandingService {
 
  constructor(private clientService: ClientsService,   private http: HttpClient ) { }

  // NON_CRUD FUNCTIONS
  collectClientBean() {
    return this.http.get<CustomerWelcomeBean>('http://localhost:8080/customer-welcome-bean');
  }
}
