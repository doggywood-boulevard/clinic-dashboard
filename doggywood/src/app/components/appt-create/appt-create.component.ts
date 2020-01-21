import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Appointment } from 'src/app/models/appointment';

@Component({
  selector: 'app-appt-create',
  templateUrl: './appt-create.component.html',
  styleUrls: ['./appt-create.component.css']
})
export class ApptCreateComponent implements OnInit {

  constructor(private apptService :AppointmentService) { }

  ngOnInit() {
  }

  addAppointment() {
    this.apptService.addAppointment(new Appointment(0, 3, 6, 48, "22-JAN-2020", 45, 3, "Testing add appointment service angular")).subscribe(
      response => {
        console.log(response);
      },
      response => {
        console.log(response);
        console.log("Failed to add appointment.");
      });
  }

  updateAppointment() {
    this.apptService.updateAppointment(new Appointment(98, 3, 6, 48, "22-JAN-2020", 45, 3, "Testing update appointment service angular"))
    .subscribe(
      response => {
        console.log(response);
      },
      response => {
        console.log("failed to update");
      });
  }

  getAllAppointments() {
    this.apptService.getAllAppointments().subscribe(
      response => {
        console.log(response);
      },
      response => {
        console.log(response);
      }
    );
  }
}
