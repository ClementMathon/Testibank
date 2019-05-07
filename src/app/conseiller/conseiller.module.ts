import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConseillerComponent } from './conseiller.component';
import { Routes, RouterModule } from '@angular/router';
import { ConseillerHomeComponent } from './conseiller-home/conseiller-home.component';
import { ValideNouveauCompteComponent } from './valide-nouveau-compte/valide-nouveau-compte.component';
import { GestionCompteClientsComponent } from './gestion-compte-clients/gestion-compte-clients.component';
import { ClientDetailComponent } from './gestion-compte-clients/client-detail/client-detail.component';
import { FormsModule } from '@angular/forms';
import { DetailCompteClientComponent } from './gestion-compte-clients/detail-compte-client/detail-compte-client.component';



//const conseillerRoute : Routes = [
 // {path: '**', component: ConseillerComponent,}
//]

const conseillerRoutes: Routes = [
  {path: '', component: ConseillerComponent , children:
    [
      {path: 'conseillerHome',  component: ConseillerHomeComponent},
      {path: 'gestionCompteClients',  component: GestionCompteClientsComponent},
      {path: 'validationCompte',  component: ValideNouveauCompteComponent},

    ]
  }
] ;




@NgModule({
  declarations: [ConseillerComponent, ConseillerHomeComponent, ValideNouveauCompteComponent,  GestionCompteClientsComponent, ClientDetailComponent, DetailCompteClientComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(conseillerRoutes),
  ],
  exports: [
    RouterModule,
    FormsModule
  ]
})
export class ConseillerModule { }
