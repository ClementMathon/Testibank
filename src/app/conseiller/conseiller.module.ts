import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConseillerComponent } from './conseiller.component';
import { Routes, RouterModule } from '@angular/router';
import { ConseillerHomeComponent } from './conseiller-home/conseiller-home.component';
import { ValideNouveauCompteComponent } from './valide-nouveau-compte/valide-nouveau-compte.component';
import { GestionCompteClientsComponent } from './gestion-compte-clients/gestion-compte-clients.component';
import { ClientDetailComponent } from './gestion-compte-clients/client-detail/client-detail.component';
import { FormsModule } from '@angular/forms'

const conseillerRoute : Routes = [
  {path: '**', component: ConseillerComponent,}
]

@NgModule({
  declarations: [ConseillerComponent, ConseillerHomeComponent, ValideNouveauCompteComponent, GestionCompteClientsComponent, ClientDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(conseillerRoute),
  ],
  exports: [
    RouterModule,
    FormsModule
  ]
})
export class ConseillerModule { }
