import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Navigation } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, NgForm } from '@angular/forms';
import { PetsService } from '../../services/pets.service';
import { ClientsService } from '../../services/clients.service'; 
import { tap, first } from 'rxjs/operators';
import { PetType } from '../../models/petType'
import { Pet } from 'src/app/models/petModel';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.css']
})
export class PetCreateComponent implements OnInit {

  // regForm: FormGroup;
  // form-state
  loading = false;
  success = false;
  panelTitle: string;
  pet: Pet;
  petGroups: PetType[] = [
    { type: 1, typeName: 'Dog' },
    { type: 2, typeName: 'Cat' },
    { type: 3, typeName: 'Parrot' },
    { type: 4, typeName: 'Ferret' },
    { type: 5, typeName: 'Other' },
  ];
  dateOfBirth: Date = new Date(2020, 1, 30);
   datePickerConfig:any;
//  @ViewChild('petForm', opts: {
//         pet: any;
//         static: boolean;
//     })
  public createPetForm: NgForm;
  public petsList = [];
  //cust
  customer: Customer; 
  public customersList = []; 

  constructor(private petService: PetsService,  
  private clientService: ClientsService, private router: Router,
    private activatedRoute: ActivatedRoute) {
      this.datePickerConfig = Object.assign({}, 
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: true,
        // minDate: new Date(2000, 0,1), // pets < 20 years?
        dateInputFormat: 'yyyy-MM-dd'  
        });
    }

  ngOnInit() {    // on page load here  
    this.petService.getPets()
      .subscribe(data => this.petsList = data);

    this.petService.getPets()
      .subscribe(data => this.petsList = data);
    this.activatedRoute.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getPet(id);
    })
// cust
    this.clientService.getCustomers()
      .subscribe(data => this.customersList = data);

    this.clientService.getCustomers()
      .subscribe(data => this.customersList = data);
    this.activatedRoute.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getCustomer(id);
    })

  }
  private getPet(id) {
    if (id === 0) {
      this.pet = {
        id: null,
        cId: null,
        petName: '',
        birthDate: '',
        weight: null,
        type: null,
        breed: '',
        description: '' 
      };
      this.panelTitle = 'Create Pet';
      // this.createPetForm.resetForm();
    } else {
      // this.pet = Object.assign({}, this._petService.getPet(id));
      this.petService.getPet(id).subscribe(
        (pet) => this.pet = pet,
        (err: any) => console.log('create-pet.comp:' + err)
      );
      this.panelTitle = 'Edit Details';
    }
  }
   private savePet(): void { 
    // const newPet: Pet = Object.assign ({}, this.pet); //no longer worry about addressing reference var
    //this._petService.save(newPet)(
      // this._petService.save(this.pet).subscribe(
      if (this.pet.id === null) {
        this.petService.addPet(this.pet).subscribe(
          (data: Pet) => {
            console.log(data);
            // this.createPetForm.resetForm();
            // this.activatedRoute.navigate(['/']);
          },
          (error: any) => console.log(error)
        );
      } else {
        this.petService.updatePet(this.pet).subscribe(
          () => { 
            // this.createPetForm.reset();
            // this.activatedRoute.navigate(['/']);
          },
          (error: any) => console.log(error)
        );
      } 
   }
   /// CUST
    private getCustomer(id)   {
    if (id === 0) {
      this.customer = {
        id: null,
        firstName: "",
        lastName:  "",
        phone:  "",
        email:  "",
        password:  "",
        cusUrl:  ""
      };
      this.panelTitle = 'Register';
      // this.createPetForm.resetForm();
    } else {
      // this.pet = Object.assign({}, this._petService.getPet(id));
      this.clientService.getCustomer(id).subscribe(
        (cust) => this.customer = cust,
        (err: any) => console.log('create-client.comp:' + err)
      );
      this.panelTitle = 'Edit Details';
    }
  } 
  private saveCustomer(): void { 
    // const newPet: Pet = Object.assign ({}, this.pet); //no longer worry about addressing reference var
    //this._petService.save(newPet)(
      // this._petService.save(this.pet).subscribe(
      if (this.pet.id === null) {
        this.petService.addPet(this.pet).subscribe(
          (data: Pet) => {
            console.log(data);
            // this.createPetForm.resetForm();
            // this.activatedRoute.navigate(['/']);
          },
          (error: any) => console.log(error)
        );
      } else {
        this.petService.updatePet(this.pet).subscribe(
          () => { 
            // this.createPetForm.reset();
            // this.activatedRoute.navigate(['/']);
          },
          (error: any) => console.log(error)
        );
      } 
   


  }
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

}
