import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager.component';
import { AffectationComponent } from './affectation/affectation.component';
import { AgentProfileComponent } from './agent-profile/agent-profile.component';
import { GestiondesagentsComponent } from './gestiondesagents/gestiondesagents.component';
import { RouterModule, Routes } from '@angular/router';


const managerRoutes: Routes = [

  /*{ path: 'gestiondesagents', component: GestiondesagentsComponent },
  { path: 'agent-profile', component: AgentProfileComponent },
  { path: 'affectation', component: AffectationComponent  },
  {path: 'deconnecter',  redirectTo: '' },*/
  { path: '**', component: ManagerComponent }
];


@NgModule({
  declarations: [ManagerComponent, AffectationComponent, AgentProfileComponent, GestiondesagentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(managerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ManagerModule { }
