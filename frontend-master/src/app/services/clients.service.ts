import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  customer2$ = this.http.get('http://localhost:3000/customer?c_id=${c_id}');
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient
  ) { }

  // getAllCustomer() :Observable<Customer[]> {
  //   return this.http.get<Customer[]>("http://localhost:3000/customer");
  // }

  // addCustomer(cust :Customer) :Observable<Customer> {
  //   return this.http.post<Customer>("http://localhost:3000/customer", cust, {headers: this.headers});
  // }
    
  getClient(c_id: number) {  // CONNECT TO JAVA BACKEND 
    
      return this.http.get(`http://localhost:3000/customer?c_id=${c_id}`);  
  }

  // getAlbums = function () {
  //   // return this.http.get('https://jsonplaceholder.typicode.com/albums'); 
  // }
}