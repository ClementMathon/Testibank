import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AffectationComponent } from './affectation/affectation.component';


const routesmanage: Routes = [
  {
    path: '',
    component: AffectationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesmanage)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
