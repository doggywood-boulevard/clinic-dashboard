import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../../services/clients.service';
import { CliLandingService } from '../../../services/cli-landing.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Customer } from '../../../models/customer';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
    // landing material from login
  welcome: string;
  object: string; 
  email: string;

  public custId: number;
  

  public customer: Customer;
  public customerList = [];

  /// method 1 observable 
  custs_url: string = "http://localhost:8080/customers";

  constructor(private clientService: ClientsService, private clientsService: ClientsService, private cliService: CliLandingService) { }

  ngOnInit() {
    this.custId = 4; // TEMP, we'll get this number from the route params

    this.getCustomer(this.custId);
    // this.getCustomerList();
  }
    getWelcome() {
    console.log(this.cliService.collectClientBean()); 
    this.cliService.collectClientBean().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    console.log('last line of message');
  }
  handleSuccessfulResponse(response) {
    console.log(response);
    console.log(response.message);
    this.object = response;
    this.welcome = response.message; 
  } 
  getCustomer(id: number) {
    this.clientService.getCustomer(4).subscribe(data => this.customer = data);
    // return  this.clientService.getCustomer(id);
    // this.clientService.getCustomers()
    //     .subscribe(data => this.customerList = data); 
  }
  getCustomerList() {
    this.clientsService.getCustomers().subscribe(data => this.customerList = data);

  }
  getClientData() {
    console.log(this.cliService.collectClientBean());
    this.cliService.collectClientBean().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

}