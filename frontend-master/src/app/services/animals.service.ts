import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from '../models/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {


  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http :HttpClient) { }
 
  getAllAnimal() :Observable<Animal[]> {
    return this.http.get<Animal[]>("http://localhost:3000/pet");
  }

  addJSONAnimal(ana :Animal) {
    console.log(ana);
  }

  addAnimal(ana :Animal) :Observable<Animal> {
    return this.http.post<Animal>("http://localhost:3000/pet", ana, {headers: this.headers});
  }
}
