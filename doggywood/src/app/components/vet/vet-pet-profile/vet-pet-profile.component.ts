import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../../services/pets.service';
import { ClientsService } from '../../../services/clients.service';


@Component({
  selector: 'app-vet-pet-profile',
  templateUrl: './vet-pet-profile.component.html',
  styleUrls: ['./vet-pet-profile.component.css']
})
export class VetPetProfileComponent implements OnInit { 

  constructor(private aniService: PetsService, private cliService: ClientsService) { }
  public petsList = [];
  public customersList = [];

  ngOnInit() {    // on page load here  
    this.aniService.getPets()
      .subscribe(data => this.petsList = data);

    this.cliService.getCustomers()
      .subscribe(data => this.customersList = data);
  } 

}
