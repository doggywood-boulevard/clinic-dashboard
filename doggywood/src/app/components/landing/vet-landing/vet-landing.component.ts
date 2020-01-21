import { Component, OnInit } from '@angular/core';

import {Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-vet-landing',
  templateUrl: './vet-landing.component.html',
  styleUrls: ['./vet-landing.component.css']
})
export class VetLandingComponent implements OnInit {

  constructor() { }




  ngOnInit() {
   
  }

}
