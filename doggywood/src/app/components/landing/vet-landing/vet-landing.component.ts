import { Component, OnInit } from '@angular/core';

import {Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { AppointmentService } from '../../../services/appointment.service';
import { Appointment } from '../../../models/appointment';
import { EmployeesService } from '../../../services/employees.service';
import { Employee } from '../../../models/employee';
import { ClientsService } from '../../../services/clients.service';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-vet-landing',
  templateUrl: './vet-landing.component.html',
  styleUrls: ['./vet-landing.component.css']
})
export class VetLandingComponent implements OnInit {
  eid: number;
  welcome: string;
  object: string;



  public apptObject: Appointment;
    id :number;
    custId :number;
    petId :number;
    empId :number;
    date :string;
    weight :number;
    timeSlot :number;
    description :string;

  public employee: Employee
  public appointment: Appointment;
  public apptList = [];
  constructor(private apptService: AppointmentService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.apptService.getAppointmentsByEmployee(48)
    .subscribe(data => {this.apptList = data}, data => {console.log('w e l o s t b o y s')});
  }

 }
