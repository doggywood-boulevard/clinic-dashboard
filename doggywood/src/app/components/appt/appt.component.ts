import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Appointment } from 'src/app/models/appointment';
import { PetsService } from 'src/app/services/pets.service';
import { Pet } from 'src/app/models/pet';
import { ClientsService } from 'src/app/services/clients.service';
import { Customer } from 'src/app/models/customer';
import { NotesService } from 'src/app/services/notes.service';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-appt',
  templateUrl: './appt.component.html',
  styleUrls: ['./appt.component.css']
})
export class ApptComponent implements OnInit {

  apptId :number;
  appointment :Appointment;
  petId :number;
  pet :Pet;
  customer :Customer;
  notes :Note[];

  constructor(
    private route :ActivatedRoute,
    private apptService :AppointmentService,
    private petService :PetsService,
    private clientService :ClientsService,
    private noteService :NotesService
  ) { }

  ngOnInit() {
    this.apptId = this.route.snapshot.params.apptId;
    this.getAppointment(this.apptId);
  }

  getAppointment(id :number) {
    this.apptService.getAppointment(id).subscribe(
      response => {
        this.appointment = response;
        this.getPet(this.appointment.petId);
        this.getNotes(this.appointment.id);
      },
      response => {
        console.log("failed to get appointment");
      });
  }

  getPet(id :number) {
    this.petService.getPet(id).subscribe(
      res => {
        this.pet = res;
        this.getOwner(this.pet.custId);
      },
      res => {
        console.log(res);
        console.log("failed to get pet");
      });
  }

  getOwner(id :number) {
    this.clientService.getCustomer(id).subscribe(
      res => {
        this.customer = res;
      },
      res => {
        console.log("failed to get pet owner");
      });
  }

  getNotes(id :number) {
    this.noteService.getNotesByApptId(id).subscribe(
      res => {
        this.notes = res;
      },
      res => {
        console.log("failed to get notes");
      }
    );
  }

  logAppt() {
    console.log(this.appointment);
  }
}
