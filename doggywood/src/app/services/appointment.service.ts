import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Appointment } from '../models/appointment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http :HttpClient) { }

  // error handler
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client-side Error getting employees: ', errorResponse.error.message)
    } else {
      console.error('Server Side Error: ', errorResponse);
    }
    return throwError('Oops, there is a problem  ..');
  }

  // create
  addAppointment(appointment :Appointment) :Observable<Appointment> {
    return this.http.post<Appointment>(`http://localhost:8080/appointments/`, appointment, {headers: this.headers})
    .pipe(catchError(this.handleError));
  }

  // get
  getAppointment(id :number) :Observable<Appointment> {
    return this.http.get<Appointment>(`http://localhost:8080/appointments/${id}`)
    .pipe(catchError(this.handleError));
  }

  // get all
  getAllAppointments() :Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`http://localhost:8080/appointments/`)
    .pipe(catchError(this.handleError));
  }

  // get appts by customer
  getAppointmentsByCustomer(id :number) :Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`http://localhost:8080/customers/${id}/appointments`)
    .pipe(catchError(this.handleError));
  }

  // get appts by pet
  getAppointmentsByPet(id :number) :Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`http://localhost:8080/pets/${id}/appointments`)
    .pipe(catchError(this.handleError));
  }

  // get appts by employee
  getAppointmentsByEmployee(id :number) :Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`http://localhost:8080/employees/${id}/appointments`)
    .pipe(catchError(this.handleError));
  }

  // update
  updateAppointment(appointment :Appointment) :Observable<Appointment> {
    return this.http.put<Appointment>(`http://localhost:8080/appointments/`, appointment, {headers: this.headers})
    .pipe(catchError(this.handleError));
  }

  // delete
  deleteAppointment(id :number) :Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/appointments/${id}`)
    .pipe(catchError(this.handleError));
  }
}
