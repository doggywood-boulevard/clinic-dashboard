import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../../services/clients.service';
import { Observable, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {  HttpHeaders, HttpErrorResponse,  HttpClient } from '@angular/common/http';
import { Customer } from '../../../models/customer';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  constructor(private clientService: ClientsService, private http: HttpClient ) { }
public customer: Customer;
 public  customerList = [];
customer5: Customer;
/// method 1 observable 
custs_url: string = "http://localhost:8080/customers";
getCustomer(id:number) {
  this.clientService.getCustomer(4).subscribe(data => this.customer  = data);
  // return  this.clientService.getCustomer(id);
  // this.clientService.getCustomers()
  //     .subscribe(data => this.customerList = data); 
}
// getCustomerMany() {
//   this.clientService.getCustomer(id).subscribe( function(data) {
//     this.output = data.firstName;
//   });
// }
  ngOnInit() {
    this.clientService.getCustomer(4).subscribe(data => this.customer  = data);
    // this.clientService.getCustomers().subscribe(data => this.customerList = data);
  }
}