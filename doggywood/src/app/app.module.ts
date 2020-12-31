/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

/* Components */
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PetCreateComponent } from './components/pet-create/pet-create.component';
import { ApptComponent } from './components/appt/appt.component';
import { ApptCreateComponent } from './components/appt-create/appt-create.component';

import { VetLandingComponent } from './components/landing/vet-landing/vet-landing.component';
import { LoginComponent } from './components/logins/login/login.component';
import { RegisterComponent } from './components/logins/register/register.component';
import { EmpVetLoginComponent } from './components/logins/emp-vet-login/emp-vet-login.component';
import { VetPetProfileComponent } from './components/vet/vet-pet-profile/vet-pet-profile.component';

import { CliPetRecordComponent } from './components/cli/cli-pet-record/cli-pet-record.component';
import { ClientsComponent } from './components/cli/clients/clients.component';
import { CliPetProfileComponent } from './components/cli/cli-pet-profile/cli-pet-profile.component';

/* Layout */
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DatePickerComponent } from './layout/date-picker/date-picker.component';

/* Services */
import { EmployeesService } from './services/employees.service';
import { ClientsService } from './services/clients.service';
import { PetsService } from './services/pets.service';
import { AuthenticationService } from './services/authentication.service';
import { VacCreateComponent } from './components/vac-create/vac-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PetCreateComponent,
    ApptComponent,
    ApptCreateComponent,
    VetLandingComponent,
    LoginComponent,
    RegisterComponent,
    EmpVetLoginComponent,
    VetPetProfileComponent,

    CliPetRecordComponent,
    ClientsComponent,
    CliPetProfileComponent,

    NavComponent,
    FooterComponent,
    DatePickerComponent,
    VacCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EmployeesService,
    ClientsService,
    PetsService,
    AuthenticationService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
