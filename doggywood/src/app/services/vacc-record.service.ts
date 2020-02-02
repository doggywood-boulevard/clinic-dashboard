import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { VaccRecord } from '../models/vacc-record';

@Injectable({
  providedIn: 'root'
})
export class VaccRecordService {

  constructor(private http: HttpClient) { }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client-side Error getting vaccination records: ', errorResponse.error.message)
    } else {
      console.error('Server Side Error: ', errorResponse);
    }
    return throwError('Oops, there is a problem  ..');
  }

createVaccRecord(record: VaccRecord): Observable<VaccRecord> {
   return this.http.post<VaccRecord>(`http://localhost:8080/records`, record, {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
   })
     .pipe(catchError(this.handleError)); 
 }

  getAllVaccRecords(): Observable<VaccRecord[]> { 
    return this.http.get<VaccRecord[]>(`http://localhost:8080/records`)
     .pipe(catchError(this.handleError));
 }

  getVaccRecordById(id: number): Observable<VaccRecord> {
   return this.http.get<VaccRecord>(`http://localhost:8080/records/${id}`) 
     .pipe(catchError(this.handleError));
 }

 getVaccRecordByCustId(id: number): Observable<VaccRecord[]> {
   return this.http.get<VaccRecord[]>(`http://localhost:8080/records/customer/${id}`) 
     .pipe(catchError(this.handleError));
 }

 getVaccRecordByPetId(id: number): Observable<VaccRecord[]> {
   return this.http.get<VaccRecord[]>(`http://localhost:8080/records/pet/${id}`) 
     .pipe(catchError(this.handleError));
 }

 getVaccRecordByApptId(id: number): Observable<VaccRecord[]> {
   return this.http.get<VaccRecord[]>(`http://localhost:8080/records/appt/${id}`) 
     .pipe(catchError(this.handleError));
 }

 updateVaccRecord(record: VaccRecord): Observable<VaccRecord> {
   return this.http.put<VaccRecord>(`http://localhost:8080/records`, record, {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
   })
     .pipe(catchError(this.handleError));
 }

 deleteVaccRecord(id: number): Observable<boolean> {
   return this.http.delete<boolean>(`http://localhost:8080/records`)
     .pipe(catchError(this.handleError));
 } 

}


