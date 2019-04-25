import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ConseillerComponent } from './conseiller/conseiller.component';
import { ManagerComponent } from './manager/manager.component';


const routes: Routes = [
  {path: 'client', component: ClientComponent},
  {path: 'conseiller', component: ConseillerComponent},
  {path: 'manager', component: ManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
