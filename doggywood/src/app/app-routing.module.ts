import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoggydashComponent } from './components/doggydash/doggydash.component';
import { ClientsComponent } from './components/cli/clients/clients.component'; 
import { LoginComponent } from './components/logins/login/login.component'; 
import { RegisterComponent } from './components/logins/register/register.component'; 
import { PetCreateComponent } from './components/pet-create/pet-create.component';
import { ApptComponent } from './components/appt/appt.component';
import { ApptCreateComponent } from './components/appt-create/appt-create.component';
import { CliPetProfileComponent } from './components/cli/cli-pet-profile/cli-pet-profile.component';
import { CliPetRecordComponent } from './components/cli/cli-pet-record/cli-pet-record.component';
import { CreateClientComponent } from './components/cli/create-client/create-client.component';
import { CliProfileComponent } from './components/landing/cli-profile/cli-profile.component';
import { RecLandingComponent } from './components/landing/rec-landing/rec-landing.component';
import { VetLandingComponent } from './components/landing/vet-landing/vet-landing.component';
import { EmpRecLoginComponent } from './components/logins/emp-rec-login/emp-rec-login.component';
import { EmpVetLoginComponent } from './components/logins/emp-vet-login/emp-vet-login.component';
import { VetPetProfileComponent } from './components/vet/vet-pet-profile/vet-pet-profile.component';
import { VetCliProfileComponent } from './components/vet/vet-cli-profile/vet-cli-profile.component';
import { VetPetRecordComponent } from './components/vet/vet-pet-record/vet-pet-record.component';
import { VacCreateComponent } from './components/vac-create/vac-create.component';

const routes: Routes = [ 
  { path: '', component: LoginComponent  },
  { path: 'cliLanding', component: CliProfileComponent},
  { path: 'cliPetProfile/:animalId', component: CliPetProfileComponent}, 
  { path: 'cliPetRecord/:animalId', component: CliPetRecordComponent},
  { path: 'createClient', component: CreateClientComponent},
  { path: 'register', component: RegisterComponent },

  { path: 'pets', component: DoggydashComponent },    
  // { path: 'clients', component: ClientsComponent },  
  { path: 'clients/:id', component: ClientsComponent }, 
  { path: 'petCreate', component: PetCreateComponent},
  { path: 'appt/:apptId', component: ApptComponent},
  { path: 'apptCreate', component: ApptCreateComponent},

  { path: 'recLogin', component: EmpRecLoginComponent},
  { path: 'recLanding', component: RecLandingComponent},

  { path: 'vetLogin', component: EmpVetLoginComponent},  
  { path: 'vetLanding', component: VetLandingComponent},
  { path: 'vetClientProfile/:clientId', component: VetCliProfileComponent},
  { path: 'vetPetProfile/:animalId', component: VetPetProfileComponent},  
  { path: 'vetPetRecord/:animalId', component: VetPetRecordComponent},
  { path: 'recordCreate', component: VacCreateComponent},
  
  /* catch-all */
  { path: '*', component: LoginComponent}
  // { path: 'admin/:userId', component: EmployeesComponent }
  // { path: 'clients/:userId', component: ClientsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
