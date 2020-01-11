import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient
  ) { }

  getClients(albumId) {  // CONNECT TO JAVA BACKEND 
    return this.http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);  
  }

  getAlbums = function () {
    return this.http.get('https://jsonplaceholder.typicode.com/albums'); 
  }
}
