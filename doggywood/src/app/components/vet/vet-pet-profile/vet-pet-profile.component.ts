import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../../services/pets.service';

@Component({
  selector: 'app-vet-pet-profile',
  templateUrl: './vet-pet-profile.component.html',
  styleUrls: ['./vet-pet-profile.component.css']
})
export class VetPetProfileComponent implements OnInit { 

  constructor(private aniService: PetsService) { }
  public petsList = [];
  public customersList = [];

  ngOnInit() {    // on page load here  
    this.aniService.getPets()
      .subscribe(data => this.petsList = data);

    this.aniService.getCustomers()
      .subscribe(data => this.customersList = data);
  } 

}
