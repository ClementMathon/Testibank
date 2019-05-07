import {Routes} from '@angular/router';

import {GestionDesAgentsComponent} from '../manager/gestiondesagents/gestionsdesagents.component';

import {AgentProfileComponent} from '../manager/agent-profile/agent-profile.component';

import {AffectationComponent} from '../manager/affectation/affectation.component';
import {ModifierunagentComponent} from '../manager/modifierunagent/modifierunagent.component';
import {SupprimerunagentComponent} from '../manager/supprimerunagent/supprimerunagent.component';
import { ManagerComponent } from './manager.component';
export const AdminLayoutRoutes: Routes = [
         {
           path: '',
           component: ManagerComponent,
           children: [
             {
               path: '',
               component: GestionDesAgentsComponent,
             },
             {
               path: 'gestiondesagents',
               component: GestionDesAgentsComponent,
             },
             {
               path: 'modifierunagent',
               component: ModifierunagentComponent,
             },
             {
               path: 'suprimerunagent',
               component: SupprimerunagentComponent,
             },

             {
               path: 'agent-profile',
               component: AgentProfileComponent,
             },
             {
               path: 'affectation',
               component: AffectationComponent,
             },
           ],
         },
       ];
