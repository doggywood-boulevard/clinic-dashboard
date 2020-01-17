import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient
  ) { }

  getAllCustomer() :Observable<Customer[]> {
    return this.http.get<Customer[]>("http://localhost:3000/customer");
  }

  addCustomer(cust :Customer) :Observable<Customer> {
    return this.http.post<Customer>("http://localhost:3000/customer", cust, {headers: this.headers});
  }


  // getClients(albumId) {  // CONNECT TO JAVA BACKEND 
  //   // return this.http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);  
  // }

  // getAlbums = function () {
  //   // return this.http.get('https://jsonplaceholder.typicode.com/albums'); 
  // }
}
