import { Component, OnInit } from '@angular/core';
import { AnimalModel } from '../../models/animalModel';
import { Animal } from '../../models/animal';
import { AnimalsService } from '../../services/animals.service';
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-animal-create',
  templateUrl: './animal-create.component.html',
  styleUrls: ['./animal-create.component.css']
})
export class AnimalCreateComponent implements OnInit {
  // c_id: number;
  // p_id: number;
  // p_name: string;
  // dob: string;
  // p_weight: number;
  // p_breed: string;
  // p_type: number;
  // p_description: string;
  // photo: string;

  animal:AnimalModel = new AnimalModel();
  animalCreateForm: FormGroup;
  constructor(private aniService: AnimalsService, private formBuilder: FormBuilder) { }

  public petsList = [];
 
  ngOnInit() {
    this.aniService.getPets()
      .subscribe(data => this.petsList = data);
    this.showTitle();
    // this.p_id,
    // this.c_id,
    // this.p_name,
    // this.dob,
    // this.p_weight,
    // this.p_type,
    // this.p_breed,
    // this.p_description,
    // this.photo  
    this.animalCreateForm = this.formBuilder.group({
      'p_name': this.animal.p_name,
      'p_breed': this.animal.p_breed,
      'dob': this.animal.dob,
      'p_weight': this.animal.p_weight,
      'p_type': this.animal.p_type,
      'photo': this.animal.photo,
      'p_description': this.animal.p_description
    });
  }

  title: string = '';
  showTitle() {
    this.title = 'Add Pet';
  };

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

  // onClear() {
  //   this.aniService.form.reset();
  //   this.aniService.initializeFormGroup();
  // }

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
