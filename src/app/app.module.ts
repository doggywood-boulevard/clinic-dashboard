import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmployeesService } from './services/employees.service';
import { ClientsService } from './services/clients.service';  
import { ClientsComponent } from './components/cli/clients/clients.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoggynavComponent } from './layout/doggynav/doggynav.component';

import { LayoutModule } from '@angular/cdk/layout';
import {MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DoggydashComponent } from './components/doggydash/doggydash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './components/logins/login/login.component';
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

@NgModule({
  declarations: [
    AppComponent, 
    ClientsComponent,
    EmployeesComponent,
    DoggynavComponent,
    DoggydashComponent,
    LoginComponent,
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
    RecLandingComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule
  ],
  providers: [
    EmployeesService,
    ClientsService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
