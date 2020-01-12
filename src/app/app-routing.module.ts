import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
 
import { DoggydashComponent } from './components/doggydash/doggydash.component';
import { ClientsComponent } from './components/clients/clients.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { LoginComponent } from './components/login/login.component'; 


const routes: Routes = [
   
  { path: '', component: LoginComponent },
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
