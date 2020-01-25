import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Appointment } from 'src/app/models/appointment';
import { ClientsService } from 'src/app/services/clients.service';
import { Customer } from 'src/app/models/customer';
import { PetsService } from 'src/app/services/pets.service';
import { Pet } from 'src/app/models/pet';

@Component({
  selector: 'app-appt-create',
  templateUrl: './appt-create.component.html',
  styleUrls: ['./appt-create.component.css']
})
export class ApptCreateComponent implements OnInit {

  customers :Customer[] = [];
  custId :number;
  pets :Pet[] = [];
  petId :number;
  weight :number;
  date :string;
  timeSlot :number;
  description :string;

  constructor(private apptService :AppointmentService, private clientService :ClientsService, private petService :PetsService) { }

  ngOnInit() {
    this.getAllCustomers();
  }

  addAppointment() {
    this.petService.getPet(this.petId).subscribe(
      response => {
        console.log(response.weight);
        this.weight = response.weight;
      },
      response => {
        console.log("failed to get pet by id");
      });
    console.log(this.weight);
    this.apptService.addAppointment(new Appointment(0, this.custId, this.petId, 48, this.date, this.weight, this.timeSlot, this.description)).subscribe(
      response => {
        console.log(response);
      },
      response => {
        console.log(response);
        console.log("Failed to add appointment.");
      });
  }

  getAllCustomers() {
    this.clientService.getCustomers().subscribe(
      response => {
        console.log(response);
        this.customers = response;
      },
      response => {
        console.log("Failed to get all customers");
      });
  }

  getPets() {
    this.petService.getPetByCust(this.custId).subscribe(
      response => {
        this.pets = response;
      },
      response => {
        console.log("Failed to get pets");
      });
  }
}
