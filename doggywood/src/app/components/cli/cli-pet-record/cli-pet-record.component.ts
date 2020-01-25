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
  selector: 'app-cli-pet-record',
  templateUrl: './cli-pet-record.component.html',
  styleUrls: ['./cli-pet-record.component.css']
})


export class CliPetRecordComponent implements OnInit {

  constructor(private apptService: AppointmentService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
