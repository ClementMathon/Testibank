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
import { SidebarClientComponent } from './sidebar-client/sidebar-client.component';

const clientRoutes: Routes = [
  {path: '', component: ClientComponent, children: 
    [
      {path: 'comptes',  component: ComptesComponent},
      {path: 'virement',  component: VirementComponent},
      {path: 'profil',  component: ProfilComponent},
      {path: 'historique',  component: HistoriqueComponent},
      {path: 'commandes',  component: CommandesComponent},
      {path: 'notifications',  component: NotificationsComponent},
    ] 
  }
] ;    

@NgModule({
  declarations: [
    ClientComponent, 
    ComptesComponent, 
    VirementComponent, 
    ProfilComponent, 
    HistoriqueComponent, 
    CommandesComponent, 
    NotificationsComponent, SidebarClientComponent
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
