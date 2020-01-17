import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
 
import { DoggydashComponent } from './components/doggydash/doggydash.component';
import { ClientsComponent } from './components/cli/clients/clients.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { LoginComponent } from './components/logins/login/login.component'; 
import { RegisterComponent } from './components/logins/register/register.component'; 

import { AnimalCreateComponent } from './components/animal-create/animal-create.component';
import { ApptComponent } from './components/appt/appt.component';
import { ApptCreateComponent } from './components/appt-create/appt-create.component';
import { CliAnimalProfileComponent } from './components/cli/cli-animal-profile/cli-animal-profile.component';
import { CliPetRecordComponent } from './components/cli/cli-pet-record/cli-pet-record.component';
import { CreateClientComponent } from './components/cli/create-client/create-client.component';
import { CliProfileComponent } from './components/landing/cli-profile/cli-profile.component';
import { RecLandingComponent } from './components/landing/rec-landing/rec-landing.component';
import { VetLandingComponent } from './components/landing/vet-landing/vet-landing.component';
import { EmpRecLoginComponent } from './components/logins/emp-rec-login/emp-rec-login.component';
import { EmpVetLoginComponent } from './components/logins/emp-vet-login/emp-vet-login.component';
import { VetAnimalProfileComponent } from './components/vet/vet-animal-profile/vet-animal-profile.component';
import { VetCliProfileComponent } from './components/vet/vet-cli-profile/vet-cli-profile.component';
import { VetPetRecordComponent } from './components/vet/vet-pet-record/vet-pet-record.component';


const routes: Routes = [
   
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'pets', component: DoggydashComponent },  
  { path: 'admin', component: EmployeesComponent },
  { path: 'clients', component: ClientsComponent }, 
  { path: 'animalCreate', component: AnimalCreateComponent},
  { path: 'appt/:apptId', component: ApptComponent},
  { path: 'apptCreate', component: ApptCreateComponent},
  { path: 'cliAnimalProfile/:animalId', component: CliAnimalProfileComponent},
  { path: 'cliPetRecord/:animalId', component: CliPetRecordComponent},
  { path: 'createClient', component: CreateClientComponent},
  { path: 'cliLanding', component: CliProfileComponent},
  { path: 'recLanding', component: RecLandingComponent},
  { path: 'vetLanding', component: VetLandingComponent},
  { path: 'recLogin', component: EmpRecLoginComponent},
  { path: 'vetLogin', component: EmpVetLoginComponent},
  { path: 'vetAnimalProfile/:animalId', component: VetAnimalProfileComponent},
  { path: 'vetClientProfile/:clientId', component: VetCliProfileComponent},
  { path: 'vetPetRecord/:animalId', component: VetPetRecordComponent}
  // { path: 'admin/:userId', component: EmployeesComponent }
  // { path: 'clients/:userId', component: ClientsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
