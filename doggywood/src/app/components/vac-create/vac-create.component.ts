import { Component, OnInit } from '@angular/core';
import { VaccRecordService } from 'src/app/services/vacc-record.service';
import { PetsService } from 'src/app/services/pets.service';
import { Pet } from 'src/app/models/pet';

@Component({
  selector: 'app-vac-create',
  templateUrl: './vac-create.component.html',
  styleUrls: ['./vac-create.component.css']
})
export class VacCreateComponent implements OnInit {

  int: number;
  petId: number;
  vName: string;
  vTime: number;
  vDate: string;
  pet: Pet;


  constructor(private recordService :VaccRecordService, private petService :PetsService) { }

  ngOnInit() {
  }

addRecord(){


}


getPet(){
this.petService.getPet(this.petId).subscribe(
  response => {
    this.pet = response;
  },
  response => {
    console.log("Failed to get pets")
  }

)

}

}
