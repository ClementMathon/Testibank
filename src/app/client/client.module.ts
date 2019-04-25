import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ComptesComponent } from './comptes/comptes.component';
import { VirementComponent } from './virement/virement.component';
import { ProfilComponent } from './profil/profil.component';
import { HistoriqueComponent } from './historique/historique.component';
import { CommandesComponent } from './commandes/commandes.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { Routes, RouterModule } from '@angular/router';

const clientRoutes: Routes = [
  {path: '**', component: ClientComponent,}
]  

@NgModule({
  declarations: [
    ClientComponent, 
    ComptesComponent, 
    VirementComponent, 
    ProfilComponent, 
    HistoriqueComponent, 
    CommandesComponent, 
    NotificationsComponent
  ],
  imports: [
    RouterModule.forChild(clientRoutes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class ClientModule { }
