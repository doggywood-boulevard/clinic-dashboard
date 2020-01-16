import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesService } from './services/employees.service';
import { ClientsService } from './services/clients.service';
import { ClientsComponent } from './components/cli/clients/clients.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { DoggynavComponent } from './layout/doggynav/doggynav.component';
import { DoggydashComponent } from './components/doggydash/doggydash.component';
import { LoginComponent } from './components/logins/login/login.component'; 
import { RegisterComponent } from './components/logins/register/register.component'; 

import { CreateClientComponent } from './components/cli/create-client/create-client.component';
import { CliProfileComponent } from './components/landing/cli-profile/cli-profile.component';
import { VetCliProfileComponent } from './components/vet/vet-cli-profile/vet-cli-profile.component';
import { ApptComponent } from './components/appt/appt.component';
import { ApptCreateComponent } from './components/appt-create/appt-create.component';
import { EmpVetLoginComponent } from './components/logins/emp-vet-login/emp-vet-login.component';
import { EmpRecLoginComponent } from './components/logins/emp-rec-login/emp-rec-login.component';
import { CliAnimalProfileComponent } from './components/cli/cli-animal-profile/cli-animal-profile.component';
import { VetAnimalProfileComponent } from './components/vet/vet-animal-profile/vet-animal-profile.component';
import { AnimalCreateComponent } from './components/animal-create/animal-create.component';
import { VetLandingComponent } from './components/landing/vet-landing/vet-landing.component';
import { VetPetRecordComponent } from './components/vet/vet-pet-record/vet-pet-record.component';
import { CliPetRecordComponent } from './components/cli/cli-pet-record/cli-pet-record.component';
import { RecLandingComponent } from './components/landing/rec-landing/rec-landing.component';
 
// import { MaterialModule } from './material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; 

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    EmployeesComponent,
    DoggynavComponent,
    DoggydashComponent,
    LoginComponent,
    RegisterComponent,
    CreateClientComponent,
    CliProfileComponent,
    VetCliProfileComponent,
    ApptComponent,
    ApptCreateComponent,
    EmpVetLoginComponent,
    EmpRecLoginComponent,
    CliAnimalProfileComponent,
    VetAnimalProfileComponent,
    AnimalCreateComponent,
    VetLandingComponent,
    VetPetRecordComponent,
    CliPetRecordComponent,
    RecLandingComponent,
    RegisterComponent
  ],
  imports: [
    // MaterialModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatSelectModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    EmployeesService,
    ClientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
