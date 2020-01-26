import { Component, OnInit } from '@angular/core';

import {Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { VaccRecord} from '../../../models/vacc-record';
import { VaccRecordService } from "../../../services/vacc-record.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cli-pet-record',
  templateUrl: './cli-pet-record.component.html',
  styleUrls: ['./cli-pet-record.component.css']
})


export class CliPetRecordComponent implements OnInit {

recList: VaccRecord[];
public expireList = [];


  constructor(private vaccService: VaccRecordService, private router: Router, private activatedRoute: ActivatedRoute) { }

  
  ngOnInit() {
    this.vaccService.getVaccRecordByPetId(5)
    .subscribe(data => {this.recList = data}, data => {console.log('w e l o s t b o y s')});

   
  }

  

}


