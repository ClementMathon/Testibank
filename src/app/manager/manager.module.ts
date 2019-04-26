import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager.component';
import { AffectationComponent } from './affectation/affectation.component';
import { AgentProfileComponent } from './agent-profile/agent-profile.component';
import { GestiondesagentsComponent } from './gestiondesagents/gestiondesagents.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterPipe } from './gestiondesagents/filter.pipe';
import { AffectationPipe1 } from './affectation/affectationliste2.pipe';
import { AffectationPipe } from './affectation/affectation.pipe';
import { FormsModule } from '@angular/forms';
import { FakeServiceConseillerService } from 'src/model/fake-service-conseiller.service';

const managerRoutes: Routes = [

  /*{ path: 'gestiondesagents', component: GestiondesagentsComponent },
  { path: 'agent-profile', component: AgentProfileComponent },
  { path: 'affectation', component: AffectationComponent  }
  {path: 'deconnecter',  component: GuestComponent },*/
  { path: '', component: ManagerComponent }
];


@NgModule({
  declarations: [ManagerComponent, AffectationComponent, AgentProfileComponent,
    GestiondesagentsComponent, FilterPipe, AffectationPipe, AffectationPipe1, FakeServiceConseillerService],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(managerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ManagerModule { }
