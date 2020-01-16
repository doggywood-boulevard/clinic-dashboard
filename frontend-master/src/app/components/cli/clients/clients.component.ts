import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';


// import { RegisterModel } from '../models/register.model';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {


  constructor(private clientService :ClientsService) { }

  ngOnInit() {
    // this.displayAllCustomer();
    this.getCustomer();
  }
  // customer1: string;
  // c_id :number;
  // fname :string;
  // lname :string;
  // phone :string;
  // email :string;
  // pass :string;
  // photo :string;
client :Customer;

getCustomer(){
  this.clientService.getClient(1).subscribe((response)=>{
  this.client.c_id = response[0];  
  });
}

}


