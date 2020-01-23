import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Appointment } from 'src/app/models/appointment';
import { PetsService } from 'src/app/services/pets.service';
import { Pet } from 'src/app/models/pet';

@Component({
  selector: 'app-appt',
  templateUrl: './appt.component.html',
  styleUrls: ['./appt.component.css']
})
export class ApptComponent implements OnInit {

  apptId :number;
  appointment :Appointment;
  pet :Pet;

  constructor(
    private route :ActivatedRoute,
    private apptService :AppointmentService,
    private petService :PetsService
  ) { }

  ngOnInit() {
    this.apptId = this.route.snapshot.params.apptId;
    console.log(this.apptId);
    this.getAppointment(this.apptId);
    console.log(this.appointment);
    this.getPet(this.appointment.petId);
  }

  getAppointment(id :number) {
    this.apptService.getAppointment(id).subscribe(
      response => {
        console.log(response);
        this.appointment = response;
      },
      response => {
        console.log("failed to get appointment");
      });
  }

  getPet(id :number) {
    this.petService.getPet(id).subscribe(
      res => {
        this.pet = res;
      },
      res => {
        console.log(res);
        console.log("failed to get pet");
      });
  }

}
