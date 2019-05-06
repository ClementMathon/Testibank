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
import { ModifierunagentComponent } from './modifierunagent/modifierunagent.component';
import { SupprimerunagentComponent } from './supprimerunagent/supprimerunagent.component';

const managerRoutes: Routes = [
  {
    path: '',
    component: ManagerComponent,
    children: [
      {
        path: 'gestiondesagents',
        component: GestiondesagentsComponent
      },
      {
        path: 'modifierunagent',
        component: ModifierunagentComponent
      },
      {
        path: 'suprimerunagent',
        component: SupprimerunagentComponent
      },

      {
        path: 'profile',
        component: AgentProfileComponent
      },
      {
        path: 'affectation',
        component: AffectationComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    ManagerComponent,
    AffectationComponent,
    AgentProfileComponent,
    GestiondesagentsComponent,
    FilterPipe,
    AffectationPipe,
    AffectationPipe1,
    ModifierunagentComponent,
    SupprimerunagentComponent
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(managerRoutes)],
  exports: [RouterModule]
})
export class ManagerModule {}
