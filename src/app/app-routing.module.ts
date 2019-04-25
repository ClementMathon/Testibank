import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ConseillerComponent } from './conseiller/conseiller.component';
import { ManagerComponent } from './manager/manager.component';
import { ClientModule } from './client/client.module';
//import {ClientModule} from './client/client.module';


const routes: Routes = [
  {path: 'client', loadChildren: () => ClientModule},
  {path: 'conseiller', component: ConseillerComponent},
  {path: 'manager', component: ManagerComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
