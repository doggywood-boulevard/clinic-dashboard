import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../../services/clients.service';
import { CliLandingService } from '../../../services/cli-landing.service';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import { Observable, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {  HttpHeaders, HttpErrorResponse,  HttpClient } from '@angular/common/http';
import { Pet } from 'src/app/models/pet';
import { PetsService } from 'src/app/services/pets.service';
import { Customer } from 'src/app/models/customer';
import { PetCreateComponent } from '../../pet-create/pet-create.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  // landing material from login  // for bean
  id: any;
  welcome: string;
  object: string;
  // Customer data from Session:
  // public customer: Customer; // session OBJECT
  custId: number;
  // paramId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cusUrl: string;
  test: any;
  panelTitle:string = 'Welcome';

  // public customerParam: Customer;
  public customer: Customer;
  public customerList = [];
  public pet: Pet;
  public petList = [];
  constructor(private route: ActivatedRoute, private router: Router, private clientService: ClientsService, private clientsService: ClientsService, private cliLandingService: CliLandingService, private petService: PetsService) {

    this.id = route.snapshot.paramMap.get('id');
    this.clientsService.getCustomer(this.id).subscribe(data=>this.customer = data);
    this.petService.getPetByCust(this.id).subscribe(data=>this.petList = data);
   }
  ngOnInit() {
    // this.getClientSessionData();
    //  this.clientsService.getClientByEmail("project0@earthlink.net").subscribe(data=>this.customer = data);
    // this.clientsService.getClientByEmail(this.email).subscribe(data=>this.customer = data);
    // this.clientsService.getCustomer(this.id).subscribe(data=>this.customer = data);
    // this.petService.getPetByCust(this.custId).subscribe(data=>this.petList = data);
    // this.petService.getPetByCust(parseInt(sessionStorage.getItem('custId'))).subscribe(data=>this.petList = data);
    // console.log(parseInt(sessionStorage.getItem("custId")));  // 91
    // console.log((parseInt(sessionStorage.getItem('custId')))); // 91
    this.test = (parseInt(sessionStorage.getItem('custId')));
    console.log(this.test);
    //this.getCustomer(this.custId);
    // this.getClientSessionData();
    // this.getClientData();
  }
  getCustomer(id: number) {
    this.clientService.getCustomer(id).subscribe(data => this.customer = data);
  }
  getCustomerList() {
    this.clientsService.getCustomers().subscribe(data => this.customerList = data);
  }
  public makeSessionData(customer:Customer) {
    //  console.log(this.customer.cusUrl)
    sessionStorage.setItem("custId", (customer.id).toString());//this.number.toString());
    sessionStorage.setItem("firstName", customer.firstName);
    sessionStorage.setItem("lastName", customer.lastName);
    sessionStorage.setItem("email", customer.email);
    sessionStorage.setItem("phone", customer.email);
    sessionStorage.setItem("cusUrl", customer.cusUrl)
  }
  getPetDetails(id: number) {
    this.petService.getPet(id).subscribe(data => {
    this.pet = data;
    console.log(this.pet);
    });
  }
    seePetDetails(id: number) {
    this.petService.getPet(id).subscribe(data => {
    this.pet = data;
    this.router.navigate([`cliPetProfile/${id}`]);
    });
  }
  // getClientSessionData() {
  //   // this.cliLandingService.makeSessionData();
  //   this.custId = parseInt(sessionStorage.getItem("custId"));
  //   this.firstName = sessionStorage.getItem("firstName");
  //   this.lastName =sessionStorage.getItem("lastName");
  //   this.email = sessionStorage.getItem("email");
  //   this.phone = sessionStorage.getItem("phone");
  //   this.cusUrl = sessionStorage.getItem("cusUrl");
  // }
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
  petTypes(petType :number) :string {
    switch (petType) {
      case 1:
        return "Dog";
        break;
      case 2:
        return "Cat";
        break;
      case 3:
        return "Parrot";
        break;
      case 4:
        return "Ferret";
        break;
      case 5:
        return "Other";
        break;
      default:
        return "??????";
        break;
    }
  }
}
