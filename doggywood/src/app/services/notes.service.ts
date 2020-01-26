import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http:HttpClient) { }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client-side Error getting notes: ', errorResponse.error.message)
    } else {
      console.error('Server Side Error: ', errorResponse);
    }
    return throwError('Oops, there is a problem  ..');
  }

  createNote(note: Note): Observable<Note> { 
    return this.http.post<Note>(`http://localhost:8080/notes`, note, { 
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .pipe(catchError(this.handleError)); 
  }

  getNoteById(id: number): Observable<Note> { 
    return this.http.get<Note>(`http://localhost:8080/notes/${id}`) 
      .pipe(catchError(this.handleError));
  }

  // getNoteByApptId(id: number): Observable<Note> {
  //   return this.http.get<Note>(`http://localhost:8080/note/appt/${id}`) 
  //     .pipe(catchError(this.handleError));
  // }

  getNoteByPetId(id: number): Observable<Note[]> {
    return this.http.get<Note[]>(`http://localhost:8080/note/pet/${id}`) 
      .pipe(catchError(this.handleError));
  }

  getNotesByApptId(id :number) :Observable<Note[]> {
    return this.http.get<Note[]>(`http://localhost:8080/appointments/${id}/notes`) 
      .pipe(catchError(this.handleError));
  }

  updateNote(note: Note): Observable<Note> { 
    return this.http.put<Note>(`http://localhost:8080/notes`, note, { 
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .pipe(catchError(this.handleError));
  }
  
  deleteNote(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`http://localhost:8080/notes/{id}`) 
      .pipe(catchError(this.handleError));
  } 
  

}
