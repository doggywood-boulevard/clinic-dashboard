import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from '../models/animal';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  aniList: Animal[];
  url: string= "http://localhost:3000/pet";
  

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http :HttpClient) { }
   
   getPets(): Observable<Animal[]>{
     return this.http.get<Animal[]>(this.url);
   }
    // form = new FormGroup({
    //   $key: (null),
    //   p_id: new FormControl(0),
    //   c_id: new FormControl(0),
    //   p_name: new FormControl(''),
    //   dob: new FormControl(''),
    //   p_weight: new FormControl(0),
    //   p_type: new FormControl(0),
    //   p_breed: new FormControl(''),
    //   p_description: new FormControl(''),
    //   photo: new FormControl('')
    // });

    // initializeFormGroup() {
    //   this.form.setValue({
    //     $key: null,
    //     p_id: 0,
    //     c_id: 0,
    //     p_name: '',
    //     dob: '',
    //     p_weight: 0,
    //     p_type: 0,
    //     p_breed: '',
    //     p_description: '',
    //     photo: 'x'
    //   });
    // }
    // this.animalCreateForm = this.formBuilder.group({
    //   'p_id': [this.aniService.p_id],
    //   'c_id': [this.user.password]
    // });

  insertAnimal(animal) {
    this.aniList.push({
      p_id: animal.p_id,
      c_id: animal.c_id,
      p_name: animal.p_name,
      dob: animal.dob,
      p_weight: animal.p_weight,
      p_type: animal.p_type,
      p_breed: animal.p_breed,
      p_description: animal.p_description,
      photo: animal.photo
    });
  }
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

//  addAnimal(ana: Animal): Observable<Animal> {
//     return this.http.post<Animal>("http://localhost:3000/pet", ana, { headers: this.headers });
//   }
 
 