import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConseillerComponent } from './conseiller.component';
import { Routes, RouterModule } from '@angular/router';

const conseillerRoute : Routes = [
  {path: '**', component: ConseillerComponent,}
]

@NgModule({
  declarations: [ConseillerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(conseillerRoute),
  ],
  exports: [
    RouterModule
  ]
})
export class ConseillerModule { }
