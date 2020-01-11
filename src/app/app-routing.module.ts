import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { DoggydashComponent } from './components/doggydash/doggydash.component';
import { ClientsComponent } from './components/clients/clients.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { FrontpageComponent } from './layout/frontpage/frontpage.component';


const routes: Routes = [
   
  { path: '', component: FrontpageComponent },
  { path: 'pets', component: DoggydashComponent },  
  { path: 'admin', component: EmployeesComponent },
  { path: 'clients', component: ClientsComponent }, 
  // { path: 'admin/:userId', component: EmployeesComponent }
  // { path: 'clients/:userId', component: ClientsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
