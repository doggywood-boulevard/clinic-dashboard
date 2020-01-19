import { Component, OnInit } from '@angular/core'; 
import { Router, ActivatedRoute, Navigation } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { EmployeesService } from '../../../services/employees.service';

@Component({
  selector: 'app-emp-rec-login',
  templateUrl: './emp-rec-login.component.html',
  styleUrls: ['./emp-rec-login.component.css']
})

export class EmpRecLoginComponent implements OnInit {
  public registerForm: NgForm;
  panelTitle: string;
  employee: Employee; 
  hide = true;
 public employeesList = [];
 
  constructor(  private employeeService: EmployeesService, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.panelTitle = "RECEPTIONIST LOGIN";
  
    this.employeeService.getEmployees()
      .subscribe(data => this.employeesList = data);

    this.employeeService.getEmployees()
      .subscribe(data => this.employeesList = data);
    this.activatedRoute.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.employeeService.getEmployee(id);
            this.getEmployee(id);
    })
  }
private loginEmployee() {
  
}
private getEmployee(id)   {
    if (id === 0) {
      this.employee = {
        id: null,
        firstName: "",
        lastName:  "",
        phone:  "",
        email:  "",
        password:  "",
        eType:  null
      }; 
      // this.createPetForm.resetForm();
    } else {
      // this.pet = Object.assign({}, this._petService.getPet(id));
      this.employeeService.getEmployee(id).subscribe(
        (cust) => this.employee = cust,
        (err: any) => console.log('login-employee.comp:' + err)
      );
      this.panelTitle = 'Login Details';
    }
  } 
  onLoginSubmit() {
    alert(this.employee.firstName + ' ' + this.employee.email + ' ' + this.employee.password);
  }
}

