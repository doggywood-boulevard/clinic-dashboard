import { Component, OnInit } from '@angular/core';
 
import { ClientsService } from '../../../services/clients.service';
import { CliLandingService } from '../../../services/cli-landing.service';

import { Customer } from '../../../models/customer';
 
import { ClientsService } from '../../../services/clients.service'; 
import { Observable, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {  HttpHeaders, HttpErrorResponse,  HttpClient } from '@angular/common/http';
import { Customer } from '../../../models/customer';
 
import { CliLandingService } from '../../../services/cli-landing.service';
  
 
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
}) 

export class ClientsComponent implements OnInit {
  // landing material from login  // for bean
  id: number;
  welcome: string;
  object: string;

  // Customer data from Session:
  public customerObject: Customer; // session OBJECT
  custId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cusUrl: string;

  public customer: Customer;
  public customerList = [];

  constructor(private clientService: ClientsService, private clientsService: ClientsService, private cliLandingService: CliLandingService) { }

  ngOnInit() {
    // get logged in user email
    this.email = this.cliLandingService.getSessionEmail();
    this.cliLandingService.getClientByEmail(this.email).subscribe(data => this.customerObject = data);
    
    // this.getCustomer(this.custId);

    this.getClientSessionData();
    this.getClientData(); 
  }

  getCustomer(id: number) {
    this.clientService.getCustomer(id).subscribe(data => this.customer = data); 
  }
  getCustomerList() {
    this.clientsService.getCustomers().subscribe(data => this.customerList = data);

  } 
  public makeSessionData(customerObject:Customer) {
    //  console.log(this.customerObject.cusUrl)
     sessionStorage.setItem("custId", (customerObject.id).toString());//this.number.toString());
     sessionStorage.setItem("firstName", customerObject.firstName);
     sessionStorage.setItem("lastName",customerObject.lastName);
     sessionStorage.setItem("email", customerObject.email);
     sessionStorage.setItem("phone",customerObject.email);
     sessionStorage.setItem("cusUrl", customerObject.cusUrl) 
  }
  getClientSessionData() {
 

    this.custId = parseInt(sessionStorage.getItem("custId"));
    this.firstName = sessionStorage.getItem("firstName");
    this.lastName =sessionStorage.getItem("lastName");
    this.email = sessionStorage.getItem("email");
    this.phone = sessionStorage.getItem("phone");
    this.cusUrl = sessionStorage.getItem("cusUrl"); 
  }    


  // Get Bean ==>  FOR LATER
  handleSuccessfulResponse(response) {
    console.log(response);
    console.log(response.message);
    this.object = response;
    this.welcome = response.message;
  }
  getClientData() {
    console.log(this.cliLandingService.collectClientBean());
    this.cliLandingService.collectClientBean().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    console.log('last line of message from GetCLientData Function');
  }
 
}