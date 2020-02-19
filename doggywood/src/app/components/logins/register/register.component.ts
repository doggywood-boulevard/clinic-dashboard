import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../../../models/register';
import { Router, ActivatedRoute, Navigation } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, NgForm } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { ClientsService } from '../../../services/clients.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: boolean = true;
  registerForm: NgForm;
  //  @ViewChild('registerForm')
  panelTitle: string;
  customer: Customer;//;
  // registerForm: FormGroup;
  successMessage: string;
  public customersList = [];

  constructor(private clientService: ClientsService, private router: Router, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.register = true;
    this.panelTitle = "CLIENT REGISTRATION";
    this.successMessage = '';
    // cust
    this.clientService.getCustomers()
      .subscribe(data => this.customersList = data);

    this.clientService.getCustomers()
      .subscribe(data => this.customersList = data);
    this.activatedRoute.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.clientService.getCustomer(id);
      this.getCustomer(id);
    })
  }
  public saveCustomer(): void {

    if (this.customer.id === null) {
      this.clientService.addCustomer(this.customer).subscribe(
        (data: Customer) => {
          console.log(data);
        },
        (error: any) => console.log("error" + error)
      );

      //  this.registerForm.resetForm();
      this.onRegisterSubmit();
      this.router.navigate(['']);

    } else {
      this.clientService.updateCustomer(this.customer).subscribe(
        () => {

        },
        (error: any) => console.log(error)
      );
      this.registerForm.reset();
      console.log(this.customer);
      this.router.navigate(['recLanding']);
    }

  }
  
  public getCustomer(id) {
    if (id === 0) {
      this.customer = {
        id: null,
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        cusUrl: ""
      };
      this.panelTitle = 'Client Registration';
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
  public onRegisterSubmit() {
    this.successMessage = 'Great!, your name: *' + this.customer.firstName + '*; username/email: *' + this.customer.email + '* have registered successfully';

  }
  public isPageRegister() {
    return this.isPageRegister;
  }
}
