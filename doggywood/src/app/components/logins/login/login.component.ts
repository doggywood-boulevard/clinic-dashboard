import { Component, OnInit } from '@angular/core'; 
import { Router, ActivatedRoute, Navigation } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, NgForm } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { ClientsService } from '../../../services/clients.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public registerForm: NgForm;
  panelTitle: string;
  customer: Customer;//;
  // registerForm: FormGroup;
  hide = true;
 public customersList = [];
 
  constructor(  private clientService: ClientsService, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.panelTitle = "CUSTOMER LOGIN";

    // this.registerForm = this.formBuilder.group({
    //   'firstName': [this.customer.firstName, [
    //     Validators.required
    //   ]],
    //   'email': [this.customer.email, [
    //     Validators.required,
    //     Validators.email
    //   ]],
    //   'password': [this.customer.password, [
    //     Validators.required,
    //     Validators.minLength(4),
    //     Validators.maxLength(30)

    //   ]]
    // });

    
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
private loginCustomer() {
  
}
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
      // this.createPetForm.resetForm();
    } else {
      // this.pet = Object.assign({}, this._petService.getPet(id));
      this.clientService.getCustomer(id).subscribe(
        (cust) => this.customer = cust,
        (err: any) => console.log('login-client.comp:' + err)
      );
      this.panelTitle = 'Login Details';
    }
  } 
  onLoginSubmit() {
    alert(this.customer.firstName + ' ' + this.customer.email + ' ' + this.customer.password);
  }
}
