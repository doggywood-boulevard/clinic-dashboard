import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { AnimalsService } from '../../services/animals.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-animal-create',
  templateUrl: './animal-create.component.html',
  styleUrls: ['./animal-create.component.css']
})
export class AnimalCreateComponent implements OnInit {
  c_id: number;
  p_id: number;
  p_name: string;
  dob: string;
  p_weight: number;
  p_breed: string;
  p_type: number;
  p_description: string;
  photo: string;

  constructor(private aniService: AnimalsService) { }

  ngOnInit() {
    this.showTitle();
  }

  title: string = 'XXX';

  showTitle() {
    this.title = 'Add Pet';
  }

  submitToConsole() {
    console.log("adding to database");
    this.aniService.addJSONAnimal(new Animal(
     99,
      199,
      'peter-parrot',
      '9-9-99',
     10,
      3,
      'Macao',
      'Ugly, talkative',
      's3//doggywood-veterinary/parrot.png'
      // this.p_id,
      // this.c_id,
      // this.p_name,
      // this.dob,
      // this.p_weight,
      // this.p_type,
      // this.p_breed,
      // this.p_description,
      // this.photo
      ));
  }

  addFormAnimal() {
    // this.validateInputFields();
    // if(this.validInputs) {
    this.aniService.addAnimal(new Animal(
      99,
      199,
      'peter-parrot',
      '9-9-99',
     10,
      3,
      'Macao',
      'Ugly, talkative',
      's3//doggywood-veterinary/parrot.png')).subscribe(
        (response) => {
          console.log(response);
            // let list = this.animalList.slice();
            // list.push(response);
            // this.animalList = list;
          },
          (response) => {
            console.log("Failed to add Animal");
            console.log(response);
          }
    );
    // }
  }
}
