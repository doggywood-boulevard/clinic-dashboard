import { Component, OnInit } from '@angular/core';

import {Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { AppointmentService } from '../../../services/appointment.service';
import { Appointment } from '../../../models/appointment';

import { ClientsService } from '../../../services/clients.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotesService } from 'src/app/services/notes.service';
import { Note } from '../../../models/note';

@Component({
  selector: 'app-vet-pet-profile',
  templateUrl: './vet-pet-profile.component.html',
  styleUrls: ['./vet-pet-profile.component.css']
})
export class VetPetProfileComponent implements OnInit { 

  public noteObj: Note;
  id: number;
  apptId: number;
  petId: number;
  message: string;
  
 public note: Note;
 public noteList = [];

  constructor(private noteservice: NotesService, private router: Router, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {     
    this.noteservice.getNoteByPetId(1)
      .subscribe(data => {this.noteList = data}, data => {console.log('w e l o s t b o y s')});

   
  }
}
