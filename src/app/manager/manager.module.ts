import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminLayoutRoutes} from './manager.routing';

import {GestionDesAgentsComponent} from '../manager/gestiondesagents/gestionsdesagents.component';

import {FilterPipe} from '../manager/gestiondesagents/filter.pipe';
import {AgentProfileComponent} from '../manager/agent-profile/agent-profile.component';

import {AffectationPipe1} from '../manager/affectation/affectationliste2.pipe';
import {AffectationPipe} from '../manager/affectation/affectation.pipe';
import {AffectationComponent} from '../manager/affectation/affectation.component';
import {ModifierunagentComponent} from '../manager/modifierunagent/modifierunagent.component';
import {SupprimerunagentComponent} from '../manager/supprimerunagent/supprimerunagent.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
} from '@angular/material';
import { ManagerComponent } from './manager.component';
import {ComponentsModule} from '../manager/components/components.module';
import { DetailagentComponent } from './gestiondesagents/detailagent/detailagent.component';
import { DetailmodifieragentComponent } from '../manager/modifierunagent/detailmodifieragent/detailmodifieragent.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    ComponentsModule,
  ],
  declarations: [
    FilterPipe,
    ManagerComponent,
    GestionDesAgentsComponent,

    AgentProfileComponent,
    AffectationComponent,
    AffectationPipe,
    ModifierunagentComponent,
    AffectationPipe1,
    SupprimerunagentComponent,
    DetailagentComponent,
    DetailmodifieragentComponent,
  ],
})
export class ManagerModule {}
