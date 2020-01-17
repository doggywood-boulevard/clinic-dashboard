import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../services/pets.service';


@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.css']
})
export class PetCreateComponent implements OnInit {

  constructor(private aniService: PetsService) { }
  public petsList = [];
  public petsLocalDBList = [];

  ngOnInit() {    // on page load here  
    this.aniService.getPets()
      .subscribe(data => this.petsList = data); 
// pets_url: string = 'http://localhost:8080/pets';
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

    this.aniService.getPetsLocal()
      .subscribe(data => this.petsLocalDBList = data);
  } 
}
