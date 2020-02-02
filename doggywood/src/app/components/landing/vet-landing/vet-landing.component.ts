import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs/operators';
import { timeoutWith } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { of, TimeoutError } from 'rxjs';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { AppointmentService } from '../../../services/appointment.service';
import { Appointment } from '../../../models/appointment';
import { EmployeesService } from '../../../services/employees.service';
import { Employee } from '../../../models/employee';
import { ClientsService } from '../../../services/clients.service';
import { Router, ActivatedRoute } from '@angular/router';
import { isNumber } from 'util';
// import { AuthenticationService } from '../../../services/authentication.service';




@Component({
  selector: 'app-vet-landing',
  templateUrl: './vet-landing.component.html',
  styleUrls: ['./vet-landing.component.css']
})
export class VetLandingComponent implements OnInit {
  eid: number;
  welcome: string;
  object: string;
  email: string;
 
  id: number;
  empId: number;
  firstName: string;
  lastName: string;
  phone: string;
  eType: string;

  storage: any;
  custId: number;
  petId: number;
  date: string;
  weight: number;
  timeSlot: number;
  description: string;

  custNameDisp :string;

  public employee: Employee
  public appointment: Appointment;
  public apptList = [];
  constructor(private employeesService: EmployeesService, private apptService: AppointmentService, private router: Router, private activatedRoute: ActivatedRoute, private clientService :ClientsService) {
 

   }

  ngOnInit() {

     
     setTimeout(() => {
     this.getEmployeeSessionData();
  
    this.email = this.getEmail();
    console.log("vet landing email: "+this.email); 
    
    this.employeesService.getEmployeeByEmail(this.email).subscribe(data => { 
      this.employee = data,
        console.log("emp object: "+ this.employee)
    })

     this.storage = sessionStorage
     this.empId = (this.empId === (null || undefined || NaN))? parseInt(this.storage.getItem("empId")): this.empId;
     console.log("empId "+ this.empId);

     this.apptService.getAppointmentsByEmployee(this.empId)
      .subscribe(data => { this.apptList = data }, data => { console.log('w e l o s t b o y s') });
 
    }, 500);
   
  }

  getEmployeeSessionData() {

    this.empId = parseInt(sessionStorage.getItem("empId"));
    this.firstName = sessionStorage.getItem("firstName");
    this.lastName = sessionStorage.getItem("lastName");
    this.email = sessionStorage.getItem("email");
    this.phone = sessionStorage.getItem("phone");
    this.eType = sessionStorage.getItem("eType"); 
  }

  getEmail() {
    return this.email = sessionStorage.getItem("email");
  }

}
