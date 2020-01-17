import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet';


@Injectable({
  providedIn: 'root'
})
export class PetsService {
  // PROD 
  base_url: string = 'http://localhost:8080';
  pets_url: string = 'http://localhost:8080/pets';
// [{
// 	"id": 2,
// 	"cId": 1,
// 	"petName": "Whiskers",
// 	"birthDate": "2017-08-01 00:00:00.0",
// 	"weight": 69,
// 	"type": 2,
// 	"breed": "English Bdog",
// 	"description": null
// }]
  // DEV
  local_url: string= "http://localhost:3000/pet";
  //[   {
  //   "p_id": 1,
  //   "c_id": 1,
  //   "p_name": "Sprinkles",
  //   "dob": "12-APR-01",
  //   "p_weight": 60,
  //   "p_type": 2,
  //   "p_breed": "Himalayan",
  //   "p_description": "Diabeetus.",
  //   "photo": "https://doggywood-veterinary.s3.amazonaws.com/assets/Animals/random_a8.jpg"
  // },
  constructor(private http: HttpClient) { }

  getPets(): Observable<Pet[]> { 
     return this.http.get<Pet[]>(this.pets_url);
  }
  getPetsLocal(): Observable<Pet[]> { 
     return this.http.get<Pet[]>(this.local_url);
  }
}
