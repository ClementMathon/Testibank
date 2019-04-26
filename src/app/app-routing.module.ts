import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ConseillerComponent } from './conseiller/conseiller.component';
import { ManagerComponent } from './manager/manager.component';
import { ClientModule } from './client/client.module';
import { ConseillerModule } from './conseiller/conseiller.module';
import { ManagerModule } from './manager/manager.module';
import { GuestComponent } from './guest/guest.component';
//import {ClientModule} from './client/client.module';


const routes: Routes = [
  { path: '', component: GuestComponent},
  { path: 'client', loadChildren: () => ClientModule },
  { path: 'conseiller', loadChildren: () => ConseillerModule },
  { path: 'manager', loadChildren: () => ManagerModule },
  { path: 'invite', component: GuestComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
