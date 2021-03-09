import { Component, OnInit } from "@angular/core";
import { ClientsService } from "../../../services/clients.service";
import { Router, ActivatedRoute, Navigation } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  NgForm,
} from "@angular/forms";
import { first } from "rxjs/operators";
import { Customer } from "src/app/models/customer";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})

export class ProfileComponent implements OnInit {
  loading = false;
  submitted = false;
  // registerForm: NgForm;
  form: FormGroup;
  //  @ViewChild('registerForm')
  panelTitle: string;

  public customersList = [];
  customers :Customer[] = [];
  customer: Customer; //;
  custId :number;
  // registerForm: FormGroup;
  successMessage: string;

  constructor(
    private clientService: ClientsService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getAllCustomers();
  }

  editCustomer() {};

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

  getClient() {
    this.clientService.getCustomer(this.custId).subscribe(
      response => {
        this.customer = response;
      },
      response => {
        console.log("Failed to find customer");
      });
  }
}
