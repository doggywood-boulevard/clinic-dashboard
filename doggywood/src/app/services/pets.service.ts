import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { Pet } from '../models/pet';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PetsService {
  // PROD 
  // base_url: string = 'http://localhost:8080';
  // pets_url: string = 'http://localhost:8080/pets';
  base_url: string = 'http://localhost:3000';
  pets_url: string = 'http://localhost:3000/pets';
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

  // error handler
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error: ', errorResponse.error.message)
    } else {
      console.error('Server Side Error: ', errorResponse);
    }
    return throwError('Oops, there is a problem  ..');
  }

  getPets(): Observable<Pet[]> { 
     return this.http.get<Pet[]>(this.pets_url)
      .pipe(catchError(this.handleError));
  }
  
  getPet(id: number): Observable<Pet> {
    // return this.listPets.find(u => u.id === id)
    return this.http.get<Pet>(`${this.base_url}/${id}`) 
      .pipe(catchError(this.handleError));
  }

  addPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.base_url, pet, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .pipe(catchError(this.handleError)); 
  }

  updatePet(pet: Pet): Observable<void> {
    return this.http.put<void>(`${this.base_url}/${pet.id}`, pet, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .pipe(catchError(this.handleError));
  }

  deletePet(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base_url}/${id}`)
      .pipe(catchError(this.handleError));
    
  }

/// DEV SERVER 3000
  getPetsLocal(): Observable<Pet[]> { 
     return this.http.get<Pet[]>(this.local_url)
      .pipe(catchError(this.handleError));;
  }
}
